        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
            
            const galleryData = [
                // Portrait
                { id: 1, category: 'portrait', imgSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', title: 'Urban Portrait', location: 'New York, 2023' },
                { id: 2, category: 'portrait', imgSrc: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', title: 'Studio Portrait', location: 'Los Angeles, 2022' },
                { id: 3, category: 'portrait', imgSrc: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', title: 'Creative Portrait', location: 'Paris, 2023' },
                { id: 4, category: 'portrait', imgSrc: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', title: 'Fashion Portrait', location: 'Milan, 2022' },
                
                // Wedding
                { id: 5, category: 'wedding', imgSrc: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', title: 'Golden Hour Kiss', location: 'Tuscany, 2022' },
                { id: 6, category: 'wedding', imgSrc: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', title: 'First Dance', location: 'Miami, 2023' },
                { id: 7, category: 'wedding', imgSrc: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', title: 'Wedding Ceremony', location: 'Santorini, 2021' },
                { id: 8, category: 'wedding', imgSrc: 'https://images.unsplash.com/photo-1519671488599-5b6a7a7a8887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', title: 'Bridal Portrait', location: 'Venice, 2020' },
                
                // Landscape
                { id: 9, category: 'landscape', imgSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', title: 'Mountain Reflection', location: 'Switzerland, 2021' },
                { id: 10, category: 'landscape', imgSrc: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80', title: 'Misty Forest', location: 'Scotland, 2020' },
                { id: 11, category: 'landscape', imgSrc: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80', title: 'Sunset Fields', location: 'Provence, 2019' },
                { id: 12, category: 'landscape', imgSrc: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', title: 'Forest Waterfall', location: 'Norway, 2022' },
                
                // Commercial
                { id: 13, category: 'commercial', imgSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80', title: 'Fashion Editorial', location: 'Paris, 2023' },
                { id: 14, category: 'commercial', imgSrc: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80', title: 'Product Shoot', location: 'Berlin, 2023' },
                { id: 15, category: 'commercial', imgSrc: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', title: 'Luxury Watch', location: 'Geneva, 2022' },
                { id: 16, category: 'commercial', imgSrc: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', title: 'Corporate Headshot', location: 'London, 2021' },
                
                // photos for load more functionality
                { id: 17, category: 'portrait', imgSrc: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', title: 'Casual Portrait', location: 'Barcelona, 2023' },
                { id: 18, category: 'wedding', imgSrc: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', title: 'Bride Preparation', location: 'Florence, 2022' },
                { id: 19, category: 'landscape', imgSrc: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', title: 'Coastal Cliffs', location: 'Ireland, 2020' },
                { id: 20, category: 'commercial', imgSrc: 'https://images.unsplash.com/photo-1556740738-b6a63ed27c26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', title: 'Office Lifestyle', location: 'Stockholm, 2021' },
                { id: 21, category: 'portrait', imgSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', title: 'Black & White Portrait', location: 'Prague, 2022' },
                { id: 22, category: 'wedding', imgSrc: 'https://images.unsplash.com/photo-1517825738774-7de9363ef735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', title: 'Wedding Reception', location: 'Vienna, 2021' },
                { id: 23, category: 'landscape', imgSrc: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', title: 'Mountain Lake', location: 'Canada, 2019' },
                { id: 24, category: 'commercial', imgSrc: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', title: 'Tech Product', location: 'San Francisco, 2022' }
            ];
            
            const galleryContainer = document.getElementById('gallery-container');
            const loadMoreBtn = document.getElementById('load-more');
            const filterButtons = document.querySelectorAll('.filter-btn');
            
            let currentFilter = 'all';
            let visiblePhotos = 8; 
            const photosPerLoad = 4; 
            
            function renderPhotos(filter = 'all', count = visiblePhotos) {
                galleryContainer.innerHTML = '';
                
                const filteredPhotos = filter === 'all' 
                    ? galleryData 
                    : galleryData.filter(photo => photo.category === filter);
                
                const photosToShow = filteredPhotos.slice(0, count);
                
                photosToShow.forEach(photo => {
                    const photoElement = document.createElement('div');
                    photoElement.className = 'gallery-item overflow-hidden rounded-xl shadow-lg cursor-pointer animate-fade-in';
                    photoElement.dataset.category = photo.category;
                    
                    photoElement.innerHTML = `
                        <img src="${photo.imgSrc}"
                             alt="${photo.title}"
                             class="w-full h-64 object-cover"
                            data-category="${photo.category}">
                        <div class="p-6 bg-white">
                            <h3 class="font-medium text-lg">${photo.title}</h3>
                            <p class="text-gray-600">${photo.location}</p>
                        </div>
                    `;
                    
                    galleryContainer.appendChild(photoElement);
                    
                    photoElement.addEventListener('click', function() {
                        const lightbox = document.getElementById('lightbox');
                        const lightboxImg = document.getElementById('lightbox-img');
                        const lightboxCaption = document.getElementById('lightbox-caption');
                        
                        lightboxImg.src = photo.imgSrc;
                        lightboxImg.alt = photo.title;
                        lightboxCaption.textContent = `${photo.title} - ${photo.location}`;
                        lightbox.style.display = 'flex';
                        document.body.style.overflow = 'hidden';
                    });
                });
                
                if (count >= filteredPhotos.length) {
                    loadMoreBtn.style.display = 'none';
                } else {
                    loadMoreBtn.style.display = 'inline-block';
                }
            }
            
            renderPhotos();
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    currentFilter = this.dataset.filter;
                    visiblePhotos = 8;
                    
                    renderPhotos(currentFilter, visiblePhotos);
                });
            });
            
            loadMoreBtn.addEventListener('click', function() {
                visiblePhotos += photosPerLoad;
                renderPhotos(currentFilter, visiblePhotos);
                
                setTimeout(() => {
                    const galleryItems = document.querySelectorAll('.gallery-item');
                    const lastItem = galleryItems[galleryItems.length - 1];
                    lastItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            });
            
            const lightbox = document.getElementById('lightbox');
            const closeLightbox = document.getElementById('close-lightbox');
            
            closeLightbox.addEventListener('click', function() {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
            
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    lightbox.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
            
            const contactForm = document.getElementById('contact-form');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            });
            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        if (!mobileMenu.classList.contains('hidden')) {
                            mobileMenu.classList.add('hidden');
                        }
                    }
                });
            });
        });