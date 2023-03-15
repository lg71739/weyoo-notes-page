const e=JSON.parse('{"key":"v-1dd9d6d0","path":"/backend/orm/mybatis/30/50-1678428485267.html","title":"ResultMap结果映射","lang":"zh-CN","frontmatter":{"title":"ResultMap结果映射","order":50,"date":"2023-03-10T00:00:00.000Z","permalink":"/backend/orm/mybatis/30/50-1678428485267.html","category":["MyBatis","ORM"],"tag":["MyBatis","ORM"],"description":"起因 原因 当数据库字段名与实体类属性名不一致时，无法正确查询到对应的属性值。 解决办法 方法一: 为字段起别名 可以通过为字段起别名的方式，保证和实体类中的属性名保持一致 方法二: 修改核心配置文件开启自动驼峰命名 可以在MyBatis的核心配置文件中的setting标签中，设置一个全局配置信息mapUnderscoreToCamelCase， 可以...","head":[["meta",{"property":"og:url","content":"https://notes.819000.xyz/backend/orm/mybatis/30/50-1678428485267.html"}],["meta",{"property":"og:site_name","content":"个人笔记"}],["meta",{"property":"og:title","content":"ResultMap结果映射"}],["meta",{"property":"og:description","content":"起因 原因 当数据库字段名与实体类属性名不一致时，无法正确查询到对应的属性值。 解决办法 方法一: 为字段起别名 可以通过为字段起别名的方式，保证和实体类中的属性名保持一致 方法二: 修改核心配置文件开启自动驼峰命名 可以在MyBatis的核心配置文件中的setting标签中，设置一个全局配置信息mapUnderscoreToCamelCase， 可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-13T09:08:10.000Z"}],["meta",{"property":"article:tag","content":"MyBatis"}],["meta",{"property":"article:tag","content":"ORM"}],["meta",{"property":"article:published_time","content":"2023-03-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-13T09:08:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ResultMap结果映射\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-13T09:08:10.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"起因","slug":"起因","link":"#起因","children":[{"level":3,"title":"原因","slug":"原因","link":"#原因","children":[]},{"level":3,"title":"解决办法","slug":"解决办法","link":"#解决办法","children":[]}]},{"level":2,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[{"level":3,"title":"数据库准备","slug":"数据库准备","link":"#数据库准备","children":[]},{"level":3,"title":"代码准备","slug":"代码准备","link":"#代码准备","children":[]}]},{"level":2,"title":"映射的使用","slug":"映射的使用","link":"#映射的使用","children":[{"level":3,"title":"简单映射","slug":"简单映射","link":"#简单映射","children":[]},{"level":3,"title":"多对一映射","slug":"多对一映射","link":"#多对一映射","children":[]},{"level":3,"title":"一对多映射","slug":"一对多映射","link":"#一对多映射","children":[]}]},{"level":2,"title":"延迟加载","slug":"延迟加载","link":"#延迟加载","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"配置方法","slug":"配置方法","link":"#配置方法","children":[]},{"level":3,"title":"代码测试","slug":"代码测试","link":"#代码测试","children":[]}]}],"git":{"createdTime":1678439239000,"updatedTime":1678698490000,"contributors":[{"name":"liguangni","email":"liguangfenglucky@163.com","commits":2}]},"readingTime":{"minutes":7.38,"words":2213},"filePathRelative":"backend/orm/mybatis/30.MyBatis基础/50.ResultMap结果映射.md","localizedDate":"2023年3月10日","autoDesc":true}');export{e as data};
