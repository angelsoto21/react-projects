import React from 'react'
import {useState} from 'react'

function TwitterFollowCard({formatusername,username,name, children}) {
  const [IsFollowing, setIsFollowing] = useState(false)

  const text = IsFollowing ? 'siguiendo' : 'Seguir'
  const buttonClassname = IsFollowing 
  ? 'as-followcard-button is-following'
  : 'as-followcard-button'

  const handleClick = () => {
    setIsFollowing(!IsFollowing)
  }

  return (
    <>
    <article className="as-followcard">
      <header className="as-followcard-header">
        <img 
        src={`https://unavatar.io/${username}`} 
        alt="avatar de robot"
        className="as-followcard-avatar" />
        <div className="as-followcard-info">
          <strong className="as-followcard-infoname">{children}</strong>
          <span className="as-followcard-infousername">{formatusername(username)}</span>
        </div>
       </header>
      <aside>
        <button className={buttonClassname} onClick={handleClick}>{text}</button>
      </aside>
    </article>
    </>
  )
}

export default TwitterFollowCard