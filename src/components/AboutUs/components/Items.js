import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

const Items = () => {
  const [page, setPage] = useState(1)
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=12`,
      {
        method: 'GET'
      }
    )
      .then(res => res.json())
      .then(response => {
        setPhotos(response)
        setIsLoading(false)
      })
      .catch(error => console.log(error))
  }, [page])

  const loadNextPhotos = () => {
    if (page < 20) {
      setIsLoading(true)
      setPage(page + 1)
    }
  }

  const loadBackPhotos = () => {
    if (page > 1) {
      setIsLoading(true)
      setPage(page - 1)
    }
  }
  
  return (
    <div className='row'>
      <div className='col-md-12  d-flex align-items-center justify-content-center pb-5'>
        <button
          type='button'
          className='btn btn-light mr-3'
          disabled={page === 20}
          onClick={() => {
            loadNextPhotos()
          }}
        >
          Next
        </button>
        {page}
        <button
          type='button'
          className='btn btn-light ml-3'
          disabled={page === 1}
          onClick={() => {
            loadBackPhotos()
          }}
        >
          Back
        </button>
      </div>
      <div className='col-md-12'>
        <div
          className={classNames('row', {
            'photos-content': isLoading
          })}
        >
          {isLoading ? (
            <div className='col-md-12 loader'>
              <div
                className='spinner-border text-dark d-flex align-items-center justify-content-center'
                role='status'
              >
                <span className='sr-only'>Loading...</span>
              </div>
            </div>
          ) : (
            photos.map(item => (
              <div className='col-md-3 pb-3' key={item.id}>
                <div className='card'>
                  <img src={item.url}
                     draggable="false" className='card-img-top' alt={item.title} />
                  <div className='card-body'>
                    <h5 className='card-title'>{item.title.slice(0, 20)}</h5>
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href='#' className='btn btn-primary'>
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Items
