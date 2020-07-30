import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import { Header } from '../Header'
import { HomeContainer } from './home.style'

const Home = () => {
  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
      {
        method: 'GET'
      }
    )
      .then(res => res.json())
      .then(response => {
        setPosts(response)
        setIsLoading(false)
      })
      .catch(error => console.log(error))
  }, [page])

  const loadMorePosts = () => {
    if (page < 10) {
      setIsLoading(true)
      setPage(page + 1)
    }
  }

  return (
    <HomeContainer>
      <Header />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 py-3'>
            <h5>Posts ({page})</h5>
            <div className='mb-3'>
              {posts.length !== 0 && (
                <button
                  type='button'
                  onClick={() => loadMorePosts()}
                  className='btn btn-secondary'
                  disabled={page === 10}
                >
                  Next Post
                </button>
              )}
            </div>
          </div>
        </div>
        <div
          className={classNames('row', {
            'post-content': isLoading
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
            posts.map(post => (
              <div className='col-md-3 pb-2' key={post.id}>
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='card-title'>{post.title.slice(0, 20)}</h5>
                    <p className='card-text'>{post.body.slice(0, 100)}</p>
                    <a href='#' className='card-link'>
                      Card link
                    </a>
                    <a href='#' className='card-link'>
                      Another link
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </HomeContainer>
  )
}

export default Home
