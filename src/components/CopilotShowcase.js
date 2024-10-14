import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './CopilotShowcase.module.css';

const videos = [
  {
    "id": "9KoDwk93N2g",
    "snippet": {
      "title": "Create a Python script in VSCode using Copilot Inline Chat",
      "description": "In this demonstration, I use GitHub Copilot Inline Chat in VSCode to create a new Python script that:\n- call the GitHub API to get the top 3 repositories of a user/organization\n- return the list as text, then refactored to return JSON list",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/9KoDwk93N2g/default.jpg",
          "width": 120,
          "height": 90
        }
      },
      "tags": [
        "vscode",
        "python",
        "inline-chat"
      ]
    }
  },
  {
    "id": "hetoGpgoXpU",
    "snippet": {
      "title": "Building function from SpringBoot annotation using Copilot completion in IntelliJ",
      "description": "Creation of a new method through completion, the name, parameters, and code of this function are generated from a simple Spring Boot annotation.",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/hetoGpgoXpU/default.jpg",
          "width": 120,
          "height": 90
        }
      }
    }
  },
  {
    "id": "YC9SMGw2P00",
    "snippet": {
      "title": "Asking Copilot, in French, how to create and publis container images",
      "description": "This sample show how GitHub Copilot Chat can help a developer to write a workflow.",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/YC9SMGw2P00/default.jpg",
          "width": 120,
          "height": 90
        }
      }
    }
  },
  {
    "id": "V8FItMNSSAc",
    "snippet": {
      "title": "Moving from Shell to Terraform with GitHub Copilot",
      "description": "In this demonstration I show how to take a Shell script file that contains many call to the Azure CLI tool (az) to create resources and convert this to a set of Terraform files.\n\nIn addition to the convertion from Shell to Terraform with Azure, I am also asking for suggestion for Terraform file for AWS Deployment.",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/V8FItMNSSAc/default.jpg",
          "width": 120,
          "height": 90
        }
      }
    }
  },
  {
    "id": "KIcfVlVG4v4",
    "snippet": {
      "title": "Converting a Java REST class to Python with Flask with Copilot",
      "description": "In this demonstration I am using GitHub Copilot to propose a new implementation of a Java SpringBoot REST Controller in Python with Flask and use SQLAlchemy for the database access",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/KIcfVlVG4v4/default.jpg",
          "width": 120,
          "height": 90
        }
      }
    }
  },
  {
    "id": "91oruYRwck0",
    "snippet": {
      "title": "Finding, Explaining, Testing and Fixing Code Vulnerability with GitHub Copilot",
      "description": "In this demonstration I use GitHub Copilot in IntelliJ to find some vulnerability in a class, this does NOT replace the security control done in your CI/CD platform!)\nOnce the vulnerabilities found, Copilot explain how to fix it, test the fix.\n\nThis is done in a Java Spring Boot Application (Petclinic) in IntelliJ.",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/91oruYRwck0/default.jpg",
          "width": 120,
          "height": 90
        }
      }
    }
  },
  {
    "id": "bkJaXevMm8U",
    "snippet": {
      "title": "Generate new test in VSCode with Copilot",
      "description": "In this demonstration I use GitHub Copilot to create new test, and add test to my existing test.",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/bkJaXevMm8U/default.jpg",
          "width": 120,
          "height": 90
        }
      }
    }
  },
  {
    "id": "iqoZBTUxfVU",
    "snippet": {
      "title": "Generate Documentation and Comments for Typescript function",
      "description": "In this demonstration I use Copilot to add some Javascript Documentation for a method, and add comments in the code.",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/iqoZBTUxfVU/default.jpg",
          "width": 120,
          "height": 90
        }
      }
    }
  },
  {
    "id": "md529cCzCk0",
    "snippet": {
      "title": "Securing & Refactoring in VSCode with Copilot",
      "description": "In this demonstration, I use Copilot Chat in VS Code to refactor some code:\n- extract all SQL queries  database interactions from an API Controller into a new Repository Class\n- Rework the SQL Queries when they are not save commenting them with some explanation\n- Add Try Catch block in the new code for exception management",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/md529cCzCk0/default.jpg",
          "width": 120,
          "height": 90
        }
      }
    }
  },
  {
    "id": "CeS9dw2mPbE",
    "snippet": {
      "title": "Explaining Vulnerable Code & Refactoring",
      "description": "This demonstration shows how to use GitHub Copilot Chat in IntelliJ to check if some code is safe, and also use the chat to refactor the code:\n- create new API to access database\n- call these new API from a Spring controller",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/CeS9dw2mPbE/default.jpg",
          "width": 120,
          "height": 90
        }
      }
    }
  },
  {
    "id": "NNZglgAWZ5o",
    "snippet": {
      "title": "Simplifying code with GitHub Copilot",
      "description": "This short demonstration shows how to simplify some code with Copilot \n- in IntelliJ using right click menu and inline chat\n- in VSCode using Chat",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/NNZglgAWZ5o/default.jpg",
          "width": 120,
          "height": 90
        }
      }
    }
  },
  {
    "id": "gf_LHc_R__g",
    "snippet": {
      "title": "Create a TypeScript class from functionnal specifications, in French",
      "description": "In this demonstration, I use VSCode and GitHub Copilot to use a specification, written in French, and create a new TypeScript Class that respects the specifications.",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/gf_LHc_R__g/default.jpg",
          "width": 120,
          "height": 90
        }
      },
      "tags": [
        "vscode",
        "typescript",
        "specifications"
      ]
    }
  }
]

export default function CopilotShowcase() {
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [selectedTag, setSelectedTag] = useState(null);

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
