// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blogs",
          title: "Blogs",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-posterior-optimization-with-clipped-objective-for-bridging-efficiency-and-stability-in-generative-policy-learning",
        
          title: "Posterior Optimization with Clipped Objective for Bridging Efficiency and Stability in Generative Policy...",
        
        description: "This is the official website for paper &#39;Posterior Optimization with Clipped Objective for Bridging Efficiency and Stability in Generative Policy Learning&#39;.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/poco/";
          
        },
      },{id: "post-color-panels-for-papers",
        
          title: "Color Panels for Papers",
        
        description: "A collection of color panels.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/color/";
          
        },
      },{id: "post-conrft-a-reinforced-fine-tuning-method-for-vla-models-via-consistency-policy",
        
          title: "ConRFT: A Reinforced Fine-tuning Method for VLA Models via Consistency Policy",
        
        description: "This is the official website for paper &#39;ConRFT: A Reinforced Fine-tuning Method for VLA Models via Consistency Policy&#39;.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/conrft/";
          
        },
      },{id: "post-cp3er-generalizing-consistency-policy-to-visual-rl-with-prioritized-proximal-experience-regularization",
        
          title: 'CP3ER: Generalizing Consistency Policy to Visual RL with Prioritized Proximal Experience Regularization <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "This is the official website for paper &#39;CP3ER: Generalizing Consistency Policy to Visual RL with Prioritized Proximal Experience Regularization&#39;. This paper has been accepted as a NeurIPS 2024 Poster.",
        section: "Posts",
        handler: () => {
          
            window.open("https://jzndd.github.io/CP3ER-Page/", "_blank");
          
        },
      },{id: "post-linux-纯命令行配置-clash",
        
          title: "Linux 纯命令行配置 Clash",
        
        description: "介绍如何使用纯命令行在 linux 上配置 Clash",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/clash/";
          
        },
      },{id: "post-boosting-continuous-control-with-consistency-policy",
        
          title: "Boosting Continuous Control with Consistency Policy",
        
        description: "This is the official website for paper &#39;Boosting Continuous Control with Consistency Policy&#39;.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/cpql/";
          
        },
      },{id: "news-i-start-to-pursuing-ph-d-degree-at-casia",
          title: 'I start to pursuing Ph.D degree at CASIA.',
          description: "",
          section: "News",},{id: "news-our-paper-about-consistency-policy-for-robotic-rl-tasks-cpql-was-accepted-to-aamas-2024",
          title: 'Our paper about consistency policy for robotic RL tasks (CPQL) was accepted to...',
          description: "",
          section: "News",},{id: "news-our-paper-about-generalizing-consistency-policy-for-visual-rl-tasks-cp3er-was-accepted-to-nips-2024",
          title: 'Our paper about generalizing consistency policy for visual RL tasks (CP3ER) was accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-about-vla-reinforced-fine-tuning-via-consistency-policy-in-real-world-environemnts-conrft-was-accepted-to-rss-2025",
          title: 'Our paper about VLA reinforced fine-tuning via consistency policy in real-world environemnts (ConRFT)...',
          description: "",
          section: "News",},{id: "news-our-survey-of-vla-models-for-embodied-manipulation-was-accepted-to-acta-automatica-sinica-自动化学报",
          title: 'Our survey of VLA models for embodied manipulation was accepted to Acta Automatica...',
          description: "",
          section: "News",},{id: "news-our-paper-about-leveraging-a-pre-trained-text-to-video-diffusion-model-to-generate-dense-rewards-for-robot-tasks-tevir-was-accepted-to-ieee-transactions-on-systems-man-and-cybernetics-systems",
          title: 'Our paper about leveraging a pre-trained text-to-video diffusion model to generate dense rewards...',
          description: "",
          section: "News",},{id: "news-our-paper-about-augmenting-vla-models-with-auxiliary-depth-prediction-qdepth-vla-was-accepted-to-aamas-2026",
          title: 'Our paper about augmenting VLA models with auxiliary depth prediction (QDepth-VLA) was accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-about-learning-3d-representations-for-robotic-manipulation-clar-was-accepted-to-icra-2026",
          title: 'Our paper about learning 3D representations for robotic manipulation (CLAR) was accepted to...',
          description: "",
          section: "News",},{id: "news-our-paper-about-on-policy-reinforced-fine-tuning-vlas-for-continual-learning-lifelong-rft-was-accepted-to-rss-2026",
          title: 'Our paper about on-policy reinforced fine-tuning VLAs for continual learning (LifeLong-RFT) was accepted...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%65%6E.%79%75%68%75%69.%74@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/cccedric", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yuhui-chen2000", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=dtqKvlEAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
