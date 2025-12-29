 function showSection(sectionId) {
            document.getElementById('mainNav').style.display = 'none';
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.getElementById(sectionId).classList.add('active');
            window.scrollTo(0, 0);
        }

        function showHome() {
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.getElementById('mainNav').style.display = 'grid';
            window.scrollTo(0, 0);
        }