document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in as author
    const authorId = localStorage.getItem('authorId');
    if (authorId) {
      loadAuthorDashboard(authorId);
    } else {
      // Show login form
      document.getElementById('loginForm').classList.remove('hidden');
    }
    
    // Event listeners
    document.getElementById('newMagazineBtn').addEventListener('click', function() {
      document.getElementById('uploadForm').classList.remove('hidden');
    });
    
    document.getElementById('cancelUpload').addEventListener('click', function() {
      document.getElementById('uploadForm').classList.add('hidden');
    });
    
    document.getElementById('magazineUploadForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const title = document.getElementById('magazineTitle').value;
      const cover = document.getElementById('magazineCover').files[0];
      const pdf = document.getElementById('magazinePdf').files[0];
      
      uploadMagazine(authorId, cover, pdf, { title })
        .then(response => {
          if (response.success) {
            // Reload dashboard
            loadAuthorDashboard(authorId);
            // Update archive
            updateMagazineArchive();
            // Hide form
            document.getElementById('uploadForm').classList.add('hidden');
          } else {
            alert('Yükleme sırasında bir hata oluştu: ' + response.message);
          }
        });
    });
  });