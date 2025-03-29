const navigationData = {
    categories: [
        {
            id: 'tools',
            name: '常用工具',
            items: [
                {
                    icon: 'https://www.google.com/favicon.ico',
                    name: 'Google',
                    url: 'https://www.google.com',
                    description: '全球最大的搜索引擎'
                },
                {
                    icon: 'https://github.com/favicon.ico',
                    name: 'GitHub',
                    url: 'https://github.com',
                    description: '全球最大的代码托管平台'
                },
                {
                    icon: 'https://www.notion.so/favicon.ico',
                    name: 'Notion',
                    url: 'https://www.notion.so',
                    description: '全能型笔记和协作工具'
                },
                {
                    icon: 'https://www.figma.com/favicon.ico',
                    name: 'Figma',
                    url: 'https://www.figma.com',
                    description: '专业的在线设计工具'
                },
                {
                    icon: 'https://tinypng.com/images/apple-touch-icon.png',
                    name: 'TinyPNG',
                    url:'https://tinypng.com',
                    description: '图片压缩工具'
                },
                {
                    icon: 'https://www.baidu.com/favicon.ico',
                    name: '百度',
                    url: 'https://www.baidu.com',
                    description: '中国最大的搜索引擎'
                },
                {
                    icon: 'https://www.bing.com/favicon.ico',
                    name: 'Bing',
                    url: 'https://www.bing.com',
                    description: '微软开发的搜索引擎'
                },
                {
                    icon: 'https://www.dropbox.com/favicon.ico',
                    name: 'Dropbox',
                    url: 'https://www.dropbox.com',
                    description: '云存储和文件共享服务'
                },
                {
                    icon: 'https://www.slack.com/favicon.ico',
                    name: 'Slack',
                    url: 'https://slack.com',
                    description: '团队协作和沟通工具'
                },
                {
                    icon: 'https://www.zoom.us/favicon.ico',
                    name: 'Zoom',
                    url: 'https://zoom.us',
                    description: '视频会议和网络研讨会平台'
                },
                {
                    icon: 'https://www.trello.com/favicon.ico',
                    name: 'Trello',
                    url: 'https://trello.com',
                    description: '看板式项目管理工具'
                }
            ]
        },
        {
            id: 'social',
            name: '社交媒体',
            items: [
                {
                    icon: 'https://www.zhihu.com/favicon.ico',
                    name: '知乎',
                    url: 'https://www.zhihu.com',
                    description: '中文互联网高质量的问答社区'
                },
                {
                    icon: 'https://weibo.com/favicon.ico',
                    name: '微博',
                    url: 'https://weibo.com',
                    description: '中国最大的社交媒体平台'
                },
                {
                    icon: 'https://twitter.com/favicon.ico',
                    name: 'Twitter',
                    url: 'https://twitter.com',
                    description: '全球最大的微博客服务'
                },
                {
                    icon: 'https://www.linkedin.com/favicon.ico',
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com',
                    description: '全球最大的职业社交平台'
                },
                {
                    icon: 'https://www.facebook.com/favicon.ico',
                    name: 'Facebook',
                    url: 'https://www.facebook.com',
                    description: '全球最大的社交网络'
                },
                {
                    icon: 'https://www.instagram.com/favicon.ico',
                    name: 'Instagram',
                    url: 'https://www.instagram.com',
                    description: '图片和视频分享平台'
                },
                {
                    icon: 'https://www.reddit.com/favicon.ico',
                    name: 'Reddit',
                    url: 'https://www.reddit.com',
                    description: '社交新闻和讨论网站'
                },
                {
                    icon: 'https://www.douban.com/favicon.ico',
                    name: '豆瓣',
                    url: 'https://www.douban.com',
                    description: '图书、电影、音乐评论社区'
                },
                {
                    icon: 'https://www.bilibili.com/favicon.ico',
                    name: '哔哩哔哩',
                    url: 'https://www.bilibili.com',
                    description: '中国年轻人喜爱的视频平台'
                }
            ]
        },
        {
            id: 'dev',
            name: '开发资源',
            items: [
                {
                    icon: 'https://developer.mozilla.org/favicon.ico',
                    name: 'MDN',
                    url: 'https://developer.mozilla.org',
                    description: '最权威的Web开发文档'
                },
                {
                    icon: 'https://stackoverflow.com/favicon.ico',
                    name: 'Stack Overflow',
                    url: 'https://stackoverflow.com',
                    description: '程序员最常用的问答网站'
                },
                {
                    icon: 'https://www.npmjs.com/favicon.ico',
                    name: 'npm',
                    url: 'https://www.npmjs.com',
                    description: '最大的JavaScript包管理库'
                },
                {
                    icon: 'https://code.visualstudio.com/favicon.ico',
                    name: 'VS Code',
                    url: 'https://code.visualstudio.com',
                    description: '最流行的代码编辑器'
                },
                {
                    icon: 'https://git-scm.com/favicon.ico',
                    name: 'Git',
                    url: 'https://git-scm.com',
                    description: '分布式版本控制系统'
                },
                {
                    icon: 'https://www.docker.com/favicon.ico',
                    name: 'Docker',
                    url: 'https://www.docker.com',
                    description: '容器化平台'
                },
                {
                    icon: 'https://www.postman.com/favicon.ico',
                    name: 'Postman',
                    url: 'https://www.postman.com',
                    description: 'API开发和测试工具'
                },
                {
                    icon: 'https://www.jetbrains.com/favicon.ico',
                    name: 'JetBrains',
                    url: 'https://www.jetbrains.com',
                    description: '专业IDE开发工具'
                },
                {
                    icon: 'https://www.atlassian.com/favicon.ico',
                    name: 'Atlassian',
                    url: 'https://www.atlassian.com',
                    description: 'Jira、Confluence等开发工具'
                }
            ]
        },
        {
            id: 'learning',
            name: '学习资源',
            items: [
                {
                    icon: 'https://www.coursera.org/favicon.ico',
                    name: 'Coursera',
                    url: 'https://www.coursera.org',
                    description: '顶级在线课程平台'
                },
                {
                    icon: 'https://www.udemy.com/favicon.ico',
                    name: 'Udemy',
                    url: 'https://www.udemy.com',
                    description: '实用技能学习平台'
                },
                {
                    icon: 'https://www.edx.org/favicon.ico',
                    name: 'edX',
                    url: 'https://www.edx.org',
                    description: '免费大学课程平台'
                },
                {
                    icon: 'https://www.khanacademy.org/favicon.ico',
                    name: 'Khan Academy',
                    url: 'https://www.khanacademy.org',
                    description: '免费在线学习平台'
                },
                {
                    icon: 'https://www.udacity.com/favicon.ico',
                    name: 'Udacity',
                    url: 'https://www.udacity.com',
                    description: '技术职业课程平台'
                },
                {
                    icon: 'https://www.skillshare.com/favicon.ico',
                    name: 'Skillshare',
                    url: 'https://www.skillshare.com',
                    description: '创意技能学习平台'
                },
                {
                    icon: 'https://www.pluralsight.com/favicon.ico',
                    name: 'Pluralsight',
                    url: 'https://www.pluralsight.com',
                    description: '技术技能培训平台'
                },
                {
                    icon: 'https://www.codecademy.com/favicon.ico',
                    name: 'Codecademy',
                    url: 'https://www.codecademy.com',
                    description: '交互式编程学习平台'
                },
                   {
                     icon: 'https://www.youtube.com/favicon.ico',
                    name: 'YouTube',
                    url: 'https://www.youtube.com',
                    description: '全球最大的视频分享平台'
                },
                {
                    icon: 'https://www.netflix.com/favicon.ico',
                    name: 'Netflix',
                    url: 'https://www.netflix.com',
                    description: '流媒体视频服务'
                },
                {
                    icon: 'https://www.spotify.com/favicon.ico',
                    name: 'Spotify',
                    url: 'https://www.spotify.com',
                    description: '音乐流媒体服务'
                },
                {
                    icon: 'https://www.twitch.tv/favicon.ico',
                    name: 'Twitch',
                    url: 'https://www.twitch.tv',
                    description: '游戏直播平台'
                }
            ]
        },
        {
            id: 'work',
            name: '工作办公',
            items: [
                {
                    icon: 'https://www.microsoft.com/favicon.ico',
                    name: 'Microsoft 365',
                    url: 'https://www.microsoft.com',
                    description: '微软办公套件'
                },
                {
                    icon: 'https://www.google.com/favicon.ico',
                    name: 'Google Workspace',
                    url: 'https://workspace.google.com',
                    description: '谷歌办公套件'
                },
                {
                    icon: 'https://www.eagle.cool/favicon.ico',
                    name: 'Eagle',
                    url: 'https://www.eagle.cool',
                    description: '素材管理工具'
                },
                {
                    icon: 'https://www.wps.cn/favicon.ico',
                    name: 'WPS',
                    url: 'https://www.wps.cn',
                    description: '金山办公软件'
                },
                {
                    icon: 'https://www.grammarly.com/favicon.ico',
                    name: 'Grammarly',
                    url: 'https://www.grammarly.com',
                    description: '英文语法检查工具'
                }
            ]
        },
        {
            id: 'design',
            name: '设计资源',
            items: [
                {
                    icon: 'https://www.behance.net/favicon.ico',
                    name: 'Behance',
                    url: 'https://www.behance.net',
                    description: '创意设计作品展示平台'
                },
                {
                    icon: 'https://www.dribbble.com/favicon.ico',
                    name: 'Dribbble',
                    url: 'https://www.dribbble.com',
                    description: '设计师创意社区'
                },
                {
                    icon: 'https://www.canva.com/favicon.ico',
                    name: 'Canva',
                    url: 'https://www.canva.com',
                    description: '在线设计工具'
                },
                {
                    icon: 'https://www.adobe.com/favicon.ico',
                    name: 'Adobe',
                    url: 'https://www.adobe.com',
                    description: '创意软件套件'
                },
                {
                    icon: 'https://www.unsplash.com/favicon.ico',
                    name: 'Unsplash',
                    url: 'https://www.unsplash.com',
                    description: '免费高质量图片库'
                }
            ]
        },
        {
            id: 'news',
            name: '新闻资讯',
            items: [
                {
                    icon: 'https://www.ithome.com/favicon.ico',
                    name: 'IT之家',
                    url: 'https://www.ithome.com',
                    description: '互联网技术资讯平台'
                },
                {
                    icon: 'https://www.nytimes.com/favicon.ico',
                    name: '纽约时报',
                    url: 'https://www.nytimes.com',
                    description: '美国主流报纸'
                },
                {
                    icon: 'https://www.theguardian.com/favicon.ico',
                    name: '卫报',
                    url: 'https://www.theguardian.com',
                    description: '英国主流报纸'
                },
                {
                    icon: 'https://www.bbc.com/favicon.ico',
                    name: 'BBC',
                    url: 'https://www.bbc.com',
                    description: '英国广播公司'
                },
                {
                    icon: 'https://www.reuters.com/favicon.ico',
                    name: '路透社',
                    url: 'https://www.reuters.com',
                    description: '国际新闻机构'
                },
                {
                    icon: 'https://www.cnn.com/favicon.ico',
                    name: 'CNN',
                    url: 'https://www.cnn.com',
                    description: '美国有线电视新闻网'
                }
            ]
        }
    ]

};