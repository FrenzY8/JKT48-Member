<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Member List</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #1a1a1a;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }

        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px;
        }

        .gallery-item {
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            position: relative;
            cursor: pointer;
        }

        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease-in-out;
        }

        .gallery-item:hover img {
            transform: scale(1.1);
        }

        .gallery-item:hover {
            cursor: zoom-in;
        }

        .member-info {
            padding: 10px;
            text-align: center;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.7);
            position: absolute;
            bottom: 0;
            width: 100%;
            transition: opacity 0.3s;
            opacity: 0;
        }

        .gallery-item:hover .member-info {
            opacity: 1;
        }
    </style>
</head>
<body>
    <div class="gallery" id="gallery"></div>

    <script>
        fetch('member.json')
            .then(response => response.json())
            .then(data => {
                const gallery = document.getElementById('gallery');
                data.forEach(member => {
                    const item = document.createElement('div');
                    item.classList.add('gallery-item');
                    
                    const img = document.createElement('img');
                    img.src = member.picture;
                    img.alt = member.name;
                    
                    const info = document.createElement('div');
                    info.classList.add('member-info');
                    info.innerHTML = `
                        <h4>${member.name}</h4>
                        <p>Generation: ${member.generation}</p>
                        <p>Graduated: ${member.graduated ? 'Yes' : 'No'}</p>
                        <p>Trainee: ${member.trainee ? 'Yes' : 'No'}</p>
                    `;
                    
                    item.appendChild(img);
                    item.appendChild(info);
                    gallery.appendChild(item);
                });
            })
            .catch(error => console.error('Error loading member data:', error));
    </script>
</body>
</html>
          
