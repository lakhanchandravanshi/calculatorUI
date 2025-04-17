
// //i made this func to restriccct space in input fields
// function preventLeadingSpace(input, errorId) {
//                           //keyword is used when the user presses a key in input field 
//   input.addEventListener("keydown", function (e) {
//     //checks if the pressed key is the spacebar.
//     if (e.key === " " && input.value.trim() === "") {// it will cheak the filed is carry space or not and trim cheake the field empty or not
//       e.preventDefault(); // Prevent space if input is empty
//       document.getElementById(errorId).style.display = "block";// it  visible the error message by setting the display style 
//     }
//   });

//   input.addEventListener("input", function () {// like it carry the space in beggning and ending
//     if (input.value.trim() !== "") {// it will cheak the filed is carry space or not and trim cheake the fieldempty or not 
//       document.getElementById(errorId).style.display = "none";// it hides the error message by setting the display style 
//     }
//   });
// }
// //fieldID catch element by id
// function showError(fieldId, message) {
//   const input = document.getElementById(fieldId);
//   const existingError = input.parentNode.querySelector('.error');// it will cheak the error message is already present or not
//   if (existingError) return; // Avoid duplicate errors

//   const error = document.createElement('div');
//   error.className = 'error';
//   error.style.color = 'red';
//   error.innerText = message;
//   input.parentNode.appendChild(error);
// }

// function clearErrors() {
//   const errors = document.querySelectorAll('.error');
//   errors.forEach(el => el.remove());
// }

// // Email validation function to check for '@' and '.'
// function isValidEmail(email) {
//   return email.includes('@') && email.includes('.');
  
// }

// // File validation function for CSV and image formats (JPG, PNG)
// function isValidFile(file, type) {
//   const fileName = file.name;
//   const fileExtension = fileName.split('.').pop().toLowerCase();//it ll create an arrey and split the file name by '.' and get the last element of the array

//   if (type === 'csv') {
//     return fileExtension === 'csv';
//   } else if (type === 'image') {
//     return ['jpg', 'jpeg', 'png'].includes(fileExtension); //includes the file extension in the array if it have one of these extention
//   }
//   return false;
// }

// // Run this once the DOM is ready
// window.addEventListener("DOMContentLoaded", function () {
//   const nameInput = document.getElementById("name");
//   const emailInput = document.getElementById("email");

//   preventLeadingSpace(nameInput, "nameError");
//   preventLeadingSpace(emailInput, "emailError");

//   document.querySelectorAll('input[name="gender-radio"]').forEach(radio => {
//     radio.addEventListener('change', () => {
//       const selected = document.querySelector('input[name="gender-radio"]:checked');
//       if (selected) {
//         document.getElementById('gender').value = selected.value;
//       }
//     });
//   });

//   document.getElementById('userForm').addEventListener('submit', async function (e) {
//     e.preventDefault();
//     clearErrors();

//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const mobile = document.getElementById('mobile').value.trim();
//     const gender = document.getElementById('gender').value;
//     const file = document.getElementById('file').files[0];
//     const img = document.getElementById('img').files[0];

 

//     let hasError = false;

//     // Validation for name, email, mobile
//     if (!name) {
//       showError('name', 'Name is required');
//       hasError = true;
//     }

//     if (!email) {
//       showError('email', 'Email is required');
//       hasError = true;
//     } else if (!isValidEmail(email)) {
//       showError('email', 'Email must contain "@" and "."');
//       hasError = true;
//     }

//     if (!mobile) {
//       showError('mobile', 'Mobile number is required');
//       hasError = true;
//     }

  
// // Code for Validate the length of the mobile number
//     else if (mobile.length !== 10 || !/^\d+$/.test(mobile)) {
//       showError('mobile', 'Mobile number must be exactly 10 digits');
//       hasError = true;
//     }

//     // File validation (CSV and image)
//     if (!file) {
//       showError('file', 'Please upload a CSV file');
//       hasError = true;
//     } else if (!isValidFile(file, 'csv')) {
//       showError('file', 'Please upload a valid CSV file');
//       hasError = true;
//     }

//     if (!img) {
//       showError('img', 'Please upload an image (JPG or PNG)');
//       hasError = true;
//     } else if (!isValidFile(img, 'image')) {
//       showError('img', 'Please upload a valid image (JPG or PNG)');
//       hasError = true;
//     }

   

//     if (hasError) return; // Stop the form submission if there's an error

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('email', email);
//     formData.append('mobile_no', mobile);
//     formData.append('gender', gender);
//     formData.append('csv', file);
//     formData.append('image', img);

//     try {
//       const response = await fetch('https://file-uploader-txlb.onrender.com/upload_details', {
//         method: 'POST',
//         body: formData,
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert(`Success: ${result.message || 'Form submitted successfully!'}`);
//         document.getElementById('userForm').reset(); // Reset form after success
//       } else {
//         alert(`Error: ${result.message || 'Something went wrong.'}`);
//       }
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('Error: Failed to submit form. Please try again.');
//     }
//   });
// });




function preventLeadingSpace(input, errorId) {
  input.addEventListener("keydown", function (e) {
    if (e.key === " " && input.value.trim() === "") {
      e.preventDefault();
      document.getElementById(errorId).style.display = "block";
    }
  });

  input.addEventListener("input", function () {
    if (input.value.trim() !== "") {
      document.getElementById(errorId).style.display = "none";
    }
  });
}

function showError(fieldId, message) {
  const input = document.getElementById(fieldId);
  const existingError = input.parentNode.querySelector('.error');
  if (existingError) return;

  const error = document.createElement('div');
  error.className = 'error';
  error.style.color = 'red';
  error.innerText = message;
  input.parentNode.appendChild(error);
}

function clearErrors() {
  const errors = document.querySelectorAll('.error');
  errors.forEach(el => el.remove());
}

function isValidEmail(email) {
  return email.includes('@') && email.includes('.');
}

function isValidFile(file, type) {
  const fileName = file.name;
  const fileExtension = fileName.split('.').pop().toLowerCase();

  if (type === 'csv') {
    return fileExtension === 'csv';
  } else if (type === 'image') {
    return ['jpg', 'jpeg', 'png'].includes(fileExtension);
  }
  return false;
}

window.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  preventLeadingSpace(nameInput, "nameError");
  preventLeadingSpace(emailInput, "emailError");

  document.querySelectorAll('input[name="gender-radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const selected = document.querySelector('input[name="gender-radio"]:checked');
      if (selected) {
        document.getElementById('gender').value = selected.value;
      }
    });
  });

  document.getElementById('userForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    clearErrors();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const gender = document.getElementById('gender').value;
    const file = document.getElementById('file').files[0];
    const img = document.getElementById('img').files[0];

    let hasError = false;

    if (!name) {
      showError('name', 'Name is required');
      hasError = true;
    }

    if (!email) {
      showError('email', 'Email is required');
      hasError = true;
    } else if (!isValidEmail(email)) {
      showError('email', 'Email must contain "@" and "."');
      hasError = true;
    }

    if (!mobile) {
      showError('mobile', 'Mobile number is required');
      hasError = true;
    } else if (mobile.length !== 10 || !/^\d+$/.test(mobile)) {
      showError('mobile', 'Mobile number must be exactly 10 digits');
      hasError = true;
    }

    if (!file) {
      showError('file', 'Please upload a CSV file');
      hasError = true;
    } else if (!isValidFile(file, 'csv')) {
      showError('file', 'Please upload a valid CSV file');
      hasError = true;
    }

    if (!img) {
      showError('img', 'Please upload an image (JPG or PNG)');
      hasError = true;
    } else if (!isValidFile(img, 'image')) {
      showError('img', 'Please upload a valid image (JPG or PNG)');
      hasError = true;
    }

    if (hasError) return;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile_no', mobile);
    formData.append('gender', gender);
    formData.append('csv', file);
    formData.append('image', img);

    // Show loader
    document.getElementById('loader').style.display = 'flex';

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
    } finally {
      // Hide loader
      document.getElementById('loader').style.display = 'none';
    }
  });
});
