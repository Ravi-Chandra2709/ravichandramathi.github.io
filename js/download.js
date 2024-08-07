document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('download-resume').addEventListener('click', function(e) {
      e.preventDefault();
      const link = document.createElement('a');
      link.href = 'images/Ravi_Chandra_Mathi.pdf';
      link.download = 'Ravi_Chandra_Mathi.pdf';
      link.dispatchEvent(new MouseEvent('click'));
    });
  });
  