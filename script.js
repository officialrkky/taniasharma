$(document).ready(() => {
    $('#information').show()
    $('#experience').hide()
    $('#education').hide()
    $('#interest_and_hobbies').hide()
    $('#honors_and_awards').hide()
    $('#skills').hide()
    
    $('#project1').show()
    $('#project2').hide()
    $('#project3').hide()
    $('#project4').hide()
    $('#project5').hide()
    $('#miniProjects').hide()
    
    $('#htmlCert').hide()
    $('#cssCert').hide()
    $('#jsCert').hide()
    $('#pyCert').hide()
    
  
  $('#activeInformation').on('click', () => {
    $('#information').show()
    $('#experience').hide()
    $('#education').hide()
    $('#interest_and_hobbies').hide()
    $('#honors_and_awards').hide()
    $('#skills').hide()

  });
  
  $('#activeExperience').on('click', () => {
    $('#information').hide()
    $('#experience').show()
    $('#education').hide()
    $('#interest_and_hobbies').hide()
    $('#honors_and_awards').hide()
    $('#skills').hide()

  });

  $('#activeEducation').on('click', () => {
     $('#information').hide()
    $('#experience').hide()
    $('#education').show()
    $('#interest_and_hobbies').hide()
    $('#honors_and_awards').hide()
    $('#skills').hide()

  });


  $('#activeInterestAndHobbies').on('click', () => {
     $('#information').hide()
    $('#experience').hide()
    $('#education').hide()
    $('#interest_and_hobbies').show()
    $('#honors_and_awards').hide()
    $('#skills').hide()

  });


  $('#activeHonorsAndAwards').on('click', () => {
    $('#information').hide()
    $('#experience').hide()
    $('#education').hide()
    $('#interest_and_hobbies').hide()
    $('#honors_and_awards').show()
    $('#skills').hide()
  });


  $('#activeSkills').on('click', () => {
    $('#information').hide()
    $('#experience').hide()
    $('#education').hide()
    $('#interest_and_hobbies').hide()
    $('#honors_and_awards').hide()
    $('#skills').show()
  });
    
$('#activeProject1').on('click', () => {
        $('#project1').show()
        $('#project2').hide()
        $('#project3').hide()
        $('#project4').hide()
        $('#project5').hide()
        $('#miniProjects').hide()  
    });
    
    $('#activeProject2').on('click', () => {
        $('#project1').hide()
        $('#project2').show()
        $('#project3').hide()
        $('#project4').hide()
        $('#project5').hide()
        $('#miniProjects').hide()  
    });

        $('#activeProject3').on('click', () => {
        $('#project1').hide()
        $('#project2').hide()
        $('#project3').show()
        $('#project4').hide()
        $('#project5').hide()
        $('#miniProjects').hide()  
    });
    
    $('#activeProject4').on('click', () => {
        $('#project1').hide()
        $('#project2').hide()
        $('#project3').hide()
        $('#project4').show()
        $('#project5').hide()
        $('#miniProjects').hide()  
    });  
    

    $('#activeProject5').on('click', () => {
        $('#project1').hide()
        $('#project2').hide()
        $('#project3').hide()
        $('#project4').hide()
        $('#project5').show()
        $('#miniProjects').hide()  
    });


    $('#activeMiniProjects').on('click', () => {
        $('#project1').hide()
        $('#project2').hide()
        $('#project3').hide()
        $('#project4').hide()
        $('#project5').hide()
        $('#miniProjects').show()  
    });    
    
$('#openHtmlCert').on('click', () => {       
    $('#htmlCert').toggle()  
   });  
    
$('#openCssCert').on('click', () => {  
    $('#cssCert').toggle()  
   });    
    
$('#openJsCert').on('click', () => {
    $('#jsCert').toggle()  
   });    
    
$('#openPyCert').on('click', () => {
    $('#pyCert').toggle()  
    });
});

