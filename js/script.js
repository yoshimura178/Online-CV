document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.transform = 'translateY(-10px)';
            section.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        section.addEventListener('mouseout', () => {
            section.style.transform = 'translateY(0)';
            section.style.boxShadow = 'none';
        });

 
        const image = section.querySelector('img');
        if (image) {
            image.style.transition = 'transform 0.3s ease-in-out';
            image.style.transform = 'scale(1.1)';
            section.addEventListener('mouseover', () => {
                image.style.transform = 'scale(1.1)'; // Scale lớn hơn khi hover
            });
            section.addEventListener('mouseout', () => {
                image.style.transform = 'scale(1)'; // Trở về scale ban đầu khi không hover
            });
        }
    });

    const aboutSection = document.querySelector('.about');
    window.addEventListener('scroll', () => {
        const opacity = 1 - (window.scrollY / 200);
        aboutSection.style.opacity = opacity < 0 ? 0 : opacity;
    });

    // Hiệu ứng chuyển động cho hình ảnh khi tải trang
    const profileImage = document.querySelector('.profile img');
    profileImage.style.transition = 'transform 0.6s ease-in-out';
    profileImage.style.transform = 'scale(1.1)';
    setTimeout(() => {
        profileImage.style.transform = 'scale(1)';
    }, 500);
    
});
