$(document).ready(function() {
    // 渲染导航分类
    function renderCategories() {
        const categoryNav = $('#categoryNav');
        navigationData.categories.forEach((category, index) => {
            const activeClass = index === 0 ? 'active' : '';
            categoryNav.append(`
                <a class="nav-link ${activeClass}" href="#" data-category="${category.id}">
                    ${category.name}
                </a>
            `);
        });
    }

    // 渲染导航卡片
    function renderCards(searchQuery = '') {
        const cardContainer = $('#cardContainer');
        cardContainer.empty();

        // 在搜索时，将被搜索到的分类置顶
        const categoriesToRender = searchQuery 
            ? [...navigationData.categories].sort((a, b) => {
                const aHasResults = a.items.some(item => 
                    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.url.toLowerCase().includes(searchQuery.toLowerCase())
                );
                const bHasResults = b.items.some(item => 
                    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.url.toLowerCase().includes(searchQuery.toLowerCase())
                );
                return bHasResults - aHasResults;
            })
            : navigationData.categories;

        categoriesToRender.forEach(category => {
            // 添加分类标题
            cardContainer.append(`
                <div class="col-12" id="category-${category.id}">
                    <h3 class="category-title mb-4">${category.name}</h3>
                </div>
            `);

            const filteredItems = searchQuery
                ? category.items.filter(item =>
                    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.url.toLowerCase().includes(searchQuery.toLowerCase())
                )
                : category.items;

            filteredItems.forEach(item => {
                cardContainer.append(`
                    <div class="col-card">
                        <div class="card" data-url="${item.url}">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-2">
                                    <img src="${item.icon}" class="card-img-top" alt="${item.name}" onerror="this.onerror=null;this.src='https://f.start.me/${item.url}'">
                                    <h5 class="card-title">${item.name}</h5>
                                </div>
                                <p class="card-text">${item.description}</p>
                            </div>
                        </div>
                    </div>
                `);
            });
        });


    };


    // 初始化页面
    renderCategories();
    renderCards();

    // 绑定导航点击事件
    $('#categoryNav').on('click', '.nav-link', function(e) {
        e.preventDefault();
        const categoryId = $(this).data('category');
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        // 滚动到对应分类区域
        $('html, body').animate({
            scrollTop: $(`#category-${categoryId}`).offset().top - 20
        }, 300);
    });

    // 绑定搜索事件
    $('#searchInput').on('input', function() {
        const searchQuery = $(this).val();
        renderCards(searchQuery);
    });

    $('#searchButton').on('click', function() {
        const searchQuery = $('#searchInput').val();
        renderCards(searchQuery);
    });

    // 监听页面滚动事件
    $(window).on('scroll', function() {
        const scrollPosition = $(window).scrollTop();
        const buffer = 100; // 缓冲区域，避免滚动时频繁切换

        // 控制返回顶部按钮的显示和隐藏
        if (scrollPosition > 300) {
            $('#backToTop').addClass('show');
        } else {
            $('#backToTop').removeClass('show');
        }

        // 遍历所有分类区域
        navigationData.categories.forEach(category => {
            const categoryElement = $(`#category-${category.id}`);
            if (categoryElement.length) {
                const categoryPosition = categoryElement.offset().top;
                const categoryHeight = categoryElement.height();

                // 判断当前滚动位置是否在分类区域内（考虑缓冲区域）
                if (scrollPosition >= categoryPosition - buffer && 
                    scrollPosition < categoryPosition + categoryHeight) {
                    // 更新导航栏高亮状态
                    $('.nav-link').removeClass('active');
                    $(`.nav-link[data-category="${category.id}"]`).addClass('active');
                }
            }
        });
    });

    // 返回顶部按钮点击事件
    $('#backToTop').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });

    // 卡片点击事件
    $(document).on('click', '.card', function() {
        const url = $(this).data('url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});