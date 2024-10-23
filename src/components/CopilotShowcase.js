import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './CopilotShowcase.module.css';
import { useEffect } from 'react';



export default function CopilotShowcase() {

  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/tgrall/automation/refs/heads/main/data/blog/videos.json')
      .then(response => response.json())
      .then(data => { 
        setVideos(data);
        setFilteredVideos(data);
    
      })
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  const handleTagClick = (tag) => {
    if (selectedTag === tag) {
      setFilteredVideos(videos);
      setSelectedTag(null);
    } else {
      const filtered = videos.filter(video => video.snippet.tags && video.snippet.tags.includes(tag));
      setFilteredVideos(filtered);
      setSelectedTag(tag);
    }
  };

  return (
    <section className={styles.features}>
      <div className="container">
        <div style={{ margin: '50px' }} >
          <h1 className="text--center" >Copilot Showcase</h1>
          <p className="text--center">
            A collection of videos ({videos.length}) that showcase Copilot in action. Click on the tags to filter the videos.
          </p>
        </div>

        <div className="row">
          {filteredVideos.map((props, idx) => (
            <div className={clsx('col col--3 card')} style={{ margin: '5px' }} key={idx}>
              <div className="text--center">
                <a href={"https://www.youtube.com/watch?v=" + props.id}>
                  <img src={props.snippet.thumbnails.default.url} alt={props.snippet.title} className={styles.img} />
                  {props.snippet.title}
                </a>
                <div className={styles.description}>
                  {props.snippet.description}
                </div>
                {props.snippet.tags && props.snippet.tags.length > 0 && (
                  <div className={styles.tagRegular}>
                    {props.snippet.tags.map((tag, index) => (
                      <button
                        key={index}
                        className={clsx(styles.tag, { [styles.selectedTag]: selectedTag === tag })}
                        onClick={() => handleTagClick(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
