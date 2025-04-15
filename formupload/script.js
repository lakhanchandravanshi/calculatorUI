document.getElementById('userForm').addEventListener('submit', async function (e) {
    e.preventDefault(); 
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const gender = document.getElementById('gender').value;
  
    const file = document.getElementById('file').files[0];
    const img = document.getElementById('img').files[0];
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile_no', mobile);
    formData.append('gender', gender);
    formData.append('csv', file);
    formData.append('image', img);
  
    try {
      const response = await fetch('https://file-uploader-txlb.onrender.com/upload_details', {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert(`Success: ${result.message || 'Form submitted successfully!'}`);
        document.getElementById('userForm').reset();
      } else {
        alert(`Error: ${result.message || 'Something went wrong.'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error: Failed to submit form. Please try again.');
    }
  });
  