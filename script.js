        document.addEventListener('DOMContentLoaded', function() {
            const paragraphs = document.querySelectorAll('.paragraph p');
            
            paragraphs.forEach(p => {
                const words = p.textContent.split(' ');
                p.innerHTML = words.map(word => 
                    `<span class="word">${word}</span>`
                ).join(' ');
            });
        });
