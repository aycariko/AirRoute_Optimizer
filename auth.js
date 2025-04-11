// Author Dashboard Components

// 1. Author Authentication
function authorLogin(username, password) {
    // Connect to your authentication service
    return authService.login(username, password)
      .then(response => {
        if (response.success) {
          loadAuthorDashboard(response.authorId);
        } else {
          showError(response.message);
        }
      });
  }
  
  // 2. Dashboard Main View
  function loadAuthorDashboard(authorId) {
    // Fetch author's publications
    getAuthorPublications(authorId).then(publications => {
      renderDashboard(publications);
    });
  }
  
  // 3. Magazine Upload Function
  function uploadMagazine(authorId, coverImage, pdfFile, metadata) {
    const formData = new FormData();
    formData.append('authorId', authorId);
    formData.append('cover', coverImage);
    formData.append('pdf', pdfFile);
    formData.append('metadata', JSON.stringify(metadata));
    
    return fetch('/api/magazines/upload', {
      method: 'POST',
      body: formData
    }).then(response => response.json());
  }
  
  // 4. Magazine Archive Integration
  function updateMagazineArchive() {
    fetch('/api/magazines')
      .then(response => response.json())
      .then(magazines => {
        // Render magazines in the archive view
        const archiveContainer = document.getElementById('dergiArsivi');
        archiveContainer.innerHTML = '';
        
        magazines.forEach(magazine => {
          const magazineElement = createMagazineElement(magazine);
          archiveContainer.appendChild(magazineElement);
        });
      });
  }
  
  // Helper function to create magazine elements
  function createMagazineElement(magazine) {
    const container = document.createElement('div');
    container.className = 'magazine-item';
    
    const cover = document.createElement('img');
    cover.src = magazine.coverUrl;
    cover.alt = magazine.title;
    
    const title = document.createElement('h3');
    title.textContent = magazine.title;
    
    const author = document.createElement('p');
    author.textContent = `Yazar: ${magazine.authorName}`;
    
    const downloadBtn = document.createElement('button');
    downloadBtn.textContent = 'PDF İndir';
    downloadBtn.onclick = () => downloadPdf(magazine.pdfUrl);
    
    container.appendChild(cover);
    container.appendChild(title);
    container.appendChild(author);
    container.appendChild(downloadBtn);
    
    return container;
  }