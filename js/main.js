$(document).ready(function () {
    var maps = [
        {
            id: 1,
            name: 'surftripmap',
            label: 'Surftrip Map',
            coverImage: 'images/maps/surftripmap/surftripmap.jpg',
            description: 'This map shows you the sweetest spots across the globe. Over 1000 surf spots, information about wave quality, water temperature, peak season, shark attacks and more.',
            specs: '- High-quality offset print on silk-coated 150lb art paper <br /> - Whiteboard Coating for re-writability <br /> - 97,5 x 56 cm (38" x 22")',
            likes: 134,
            price: 35,
            slides: [
                {
                    type: 'image',
                    url: 'images/maps/surftripmap/surftripmap2.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/surftripmap/surftripmap3.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/surftripmap/surftripmap4.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/surftripmap/surftripmap5.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/surftripmap/surftripmap6.jpg'
                },
                {
                    type: 'video',
                    thumbnail: 'images/maps/surftripmap/surftrip.gif',
                    url: 'https://player.vimeo.com/video/139057075'
                }]
        },
        {
            id: 2,
            name: 'scratchmap',
            label: 'Sketch Map',
            coverImage: 'images/maps/sketchmap/sketch1.jpg',
            description: 'The Sketch Map combines awesome hand-lettered typography with simple line drawings and carefully illustrated highlights - created by guest artist Eva Dietrich from Hamburg.',
            specs: '- High-quality offset print on silk-coated 150lb art paper <br /> - Whiteboard Coating for re-writability <br /> - 97,5 x 56 cm (38" x 22")',
            likes: 342,
            price: 25,
            slides: [
                {
                    type: 'image',
                    url: 'images/maps/sketchmap/sketch1.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/sketchmap/sketch2.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/sketchmap/sketch3.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/sketchmap/sketch4.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/sketchmap/sketch5.jpg'
                },
                {
                    type: 'video',
                    thumbnail: 'images/maps/sketchmap/sketchmap.gif',
                    url: 'https://player.vimeo.com/video/176465386'
                },
                {
                    type: 'image',
                    url: 'images/maps/sketchmap/sketch6.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/sketchmap/sketch7.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/sketchmap/sketch8.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/sketchmap/sketch9.jpg'
                }
            ]
        },
        {
            id: 3,
            name: 'lovemap',
            label: 'Map of love',
            coverImage: 'images/maps/lovemap/love1.jpg',
            description: 'A map for cool couples... to commemorate important relationship milestones with the included sticker-set. Additionally, get inspired for the best trips-for-two in every country.',
            specs: '- High-quality offset print on silk-coated 150lb art paper <br /> - Whiteboard Coating for re-writability <br /> - 97,5 x 56 cm (38" x 22")',
            likes: 411,
            price: 40,
            slides: [
                {
                    type: 'image',
                    url: 'images/maps/lovemap//love1.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/lovemap//love2.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/lovemap//love3.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/lovemap//love4.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/lovemap//love5.jpg'
                },
                {
                    type: 'video',
                    thumbnail: 'images/maps/lovemap//lovemap.gif',
                    url: 'https://player.vimeo.com/video/177184233'
                }
            ]
        },
        {
            id: 4,
            name: 'bucketlistmap',
            label: 'Bucketlist map',
            coverImage: 'images/maps/bucketlistmap/bucketlist1.jpg',
            description: "Illustrated world map of the most awesome destinations on Planet Earth, from big-name spots to little-known gems. Discover the world as you haven't seen it before.",
            specs: '- High-quality offset print on silk-coated 150lb art paper <br /> - Whiteboard Coating for re-writability <br /> - 97,5 x 56 cm (38" x 22")',
            likes: 56,
            price: 30,
            slides: [
                {
                    type: 'image',
                    url: 'images/maps/bucketlistmap/bucketlist1.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/bucketlistmap/bucketlist2.jpg'
                },
                {
                    type: 'video',
                    thumbnail: 'images/maps/bucketlistmap/bucketlistmap.gif',
                    url: 'https://player.vimeo.com/video/138890713'
                },
                {
                    type: 'image',
                    url: 'images/maps/bucketlistmap/bucketlist3.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/bucketlistmap/bucketlist4.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/bucketlistmap/bucketlist5.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/bucketlistmap/bucketlist6.jpg'
                }
            ]
        },
        {
            id: 5,
            name: 'the-world-a-z',
            label: 'The World A-Z',
            coverImage: 'images/maps/a-zmap/a-z1.jpg',
            description: "All 195 countries in alphabetical order - with high-tech scratch coating to reveal visited countries one-by-one. The World A-Z will help you keep track in style.",
            specs: '- High-quality offset print on silk-coated 150lb art paper <br /> - Whiteboard Coating for re-writability <br /> - 97,5 x 56 cm (38" x 22")',
            likes: 556,
            price: 45,
            slides: [
                {
                    type: 'image',
                    url: 'images/maps/a-zmap/a-z1.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/a-zmap/a-z4.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/a-zmap/a-z3.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/a-zmap/a-z2.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/a-zmap/a-z5.jpg'
                },
                {
                    type: 'video',
                    thumbnail: 'images/maps/a-zmap/a-zmap.gif',
                    url: 'https://player.vimeo.com/video/176450458'
                },
                {
                    type: 'image',
                    url: 'images/maps/a-zmap/a-z8.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/a-zmap/a-z7.jpg'
                },
                {
                    type: 'image',
                    url: 'images/maps/a-zmap/a-z6.jpg'
                }
            ]
        }
    ];

    var cart = {
            totalAmount: 0,
            itemsCount: 0,
            opened: false,
            items: []
        };

    var currentMapId = null;
    var currentMap = null;
    var currentImageIndex = null;

    var $maps = $('#maps');
    var $body = $('body');

    var mapTemplate = $('#mapTemplate').html();
    var popupTemplate = $('#popupTemplate').html();
    var modalTemplate = $('#modalTemplate').html();
    var galleryModalTemplate = $('#galleryModalTemplate').html();
    var cartTemplate = $('#cartTemplate').html();
    var checkoutTemplate = $('#checkoutTemplate').html();
    var checkoutCartTemplate = $('#checkoutCartTemplate').html();
    var finalStepTemplate = $('#finalStepTemplate').html();

    $maps.html(_.map(maps, function (map) {
        var template = _.template(mapTemplate);
        return template(map);
    }))

    var $openMapModal = $('.open-map-modal');

    $openMapModal.click(function (e) {
        e.stopPropagation();
        var mapId = $(this).data('id');
        openMapModal(mapId);
    });

    $body.on('click', '.open-map-modal, .cart-map-image', function (e) {
        e.stopPropagation();
        $('.checkout-modal').remove();
        var mapId = $(this).data('id');
        openMapModal(mapId);
    });

    $body.on('click', '.open-cart-sidebar', function (e) {
        cart.opened = true;
        refreshCurrentMapModal();
    });

    function refreshCurrentMapModal() {
        openMapModal(currentMapId);
    }

    function openMapModal(mapId) {
        currentMapId = +mapId;

        currentMap = _.findWhere(maps, {id: currentMapId});
        var template = _.template(modalTemplate);
        $('#modal').remove();
        $body.append(template({
            map: currentMap,
            cart: cart
        }));

        updateCart();
    }

    $body.on('click', '.close-map', function () {
        cart.opened = false;
        $(this).parent().parent().remove();
    });

    $body.on('click', '.close-gallery', function () {
        $(this).closest('#galleryModal').remove();
    });

    $body.on('click', '.image, .video', function () {
        var imageIndex = $(this).data('index');
        currentImageIndex = imageIndex;
        loadImage(currentImageIndex);
    });

    $body.on('click', '#galleryModal .right', function () {
        if (currentImageIndex + 1 == currentMap.slides.length) {
            loadImage(0);
        } else {
            loadImage(currentImageIndex + 1);
        }
    });

    $body.on('click', '#galleryModal .left', function () {
        if (currentImageIndex - 1 < 0) {
            loadImage(currentMap.slides.length - 1);
        } else {
            loadImage(currentImageIndex - 1);
        }
    });

    $body.on('click', '.open-checkout', function () {

        var template = _.template(checkoutTemplate);
        var checkoutCartTmp = _.template(checkoutCartTemplate);

        $body.append(template);

        $('.popup-cart').html(checkoutCartTmp({cart: cart}))
    });

    function loadImage(index) {
        currentImageIndex = index;
        var slide = currentMap.slides[currentImageIndex];
        var template = _.template(galleryModalTemplate);
        $('#galleryModal').remove();
        $body.append(template({slide: slide}));
    }

    $body.on('click', '.buy, .add-gallery-map-to-cart', function () {

        $(this).text('Adding...');

        setTimeout(function () {
            var item = {
                mapId: currentMap.id,
                map: currentMap,
                qty: 1
            };
            addToCart(item);
        }, 1000)
    });

    function addToCart(item) {

        cart.opened = true;
        cart.itemsCount++;
        cart.totalAmount += item.map.price;

        if(!isAlreadyInCart(item)){
            cart.items.push(item);
        }

        refreshCurrentMapModal();
        if($('#galleryModal').length){
            loadImage(currentImageIndex);
        }
    }
    
    function isAlreadyInCart(item){
        var added = false;
        var items = cart.items;
        
        for(var i = 0; i<items.length; i++) {
            if(items[i].mapId === item.mapId) {
                items[i].qty++;
                added = true;
                break;
            }
        }

        return added;
    }

    function updateCart() {
        var $cartBox = $('.cart-box');
        
        console.log(cart);
 
        var template = _.template(cartTemplate);

        $cartBox.html(template({cart: cart}));
    }

    $body.on('click', '.card', function () {
        $('.card').removeClass('selected');
        $('.payment-inputs').removeClass('opened');
        $(this).addClass('selected');
        if(!$(this).hasClass('paypal')) {
            $('.payment-inputs').addClass('opened');
        }
    });

    $body.on('click', '.make-purchase', function () {
        var template = _.template(finalStepTemplate);

        $('.popup-checkout').html(template({state: { loading: true } }));

        setTimeout(function () {
            $('.popup-checkout').html(template({state: { loading: false } }));
        }, 5000)
    });

    $body.on('click', '.continue-shopping', function () {
        $('.modal').remove();
        $('#galleryModal').remove();
        resetCart();
    });

    function resetCart() {
        cart.opened = false;
        cart.items = [];
        cart.totalAmount = 0;
        cart.itemsCount = 0;
    }

    $body.on('click', '#modal .left', function () {
        changeSlide();
    });

    $body.on('click', '#modal .right', function () {
        changeSlide();
    });


    $body.on('click', '.heart-icon', function () {
        if (!$(this).hasClass('liked')) {
            $(this).addClass('liked').next().html(+$(this).next().text() + 1);
        }
    });

    $body.on('click', '.cart-map-delete', function () {
        var id = $(this).data('id');
        var items = cart.items;
        cart.itemsCount--;

        for(var i = 0; i < items.length; i++) {
            if(items[i].mapId === id) {
                cart.totalAmount -= items[i].map.price;
                if(items[i].qty > 1) {
                    items[i].qty--;
                } else {
                    items.splice(i,1);
                }
                break;
            }
        }

        updateCart();

        if($('#modal.checkout-modal').length){
            var checkoutCartTmp = _.template(checkoutCartTemplate);
            $('.popup-cart').html(checkoutCartTmp({cart: cart}));
            if(cart.items.length === 0) {
                $('.popup-payments-buttons').remove();
            }
        }
    });

    $body.on('click', '.cart-close, .cart-empty-close', function () {
        cart.opened = false;
        refreshCurrentMapModal();
    });

    function changeSlide() {
        var template = _.template(modalTemplate);
        var currentIndex = maps.indexOf(currentMap);

        $('#modal').remove();

        if (currentIndex < maps.length - 1) {
            $body.append(template({map: maps[currentIndex + 1], cart: cart}));
            currentMap = maps[currentIndex + 1];
            currentMapId = maps[currentIndex + 1].id;
        } else if (currentIndex == maps.length - 1) {
            currentIndex = 0;
            $body.append(template({map: maps[currentIndex], cart: cart}));
            currentMap = maps[currentIndex];
            currentMapId = maps[currentIndex].id;
        }
        updateCart();
    }

    $(document).keydown(function (e) {
        switch (e.keyCode) {
            case 37:
                console.log('left');
                changeSlide();
                break;
            case 39:
                console.log('right');
                changeSlide();
                break;
            default:
                return;
        }
        e.preventDefault();
    });


});