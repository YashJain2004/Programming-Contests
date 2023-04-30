let url = "https://kontests.net/api/v1/all"


let response = fetch(url)





// .then(response => response.json())
//         .then((response) => {






//         console.log(response)


//         meaning.innerHTML = response.definition
        


let imgArr = {
  
    0: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg', 

    1: 'https://www.freecodecamp.org/news/content/images/2022/12/main-image.png', 

    2: 'https://www.turing.com/blog/wp-content/uploads/2022/02/programminng-languages-for-ai-scaled.jpg', 

    3: 'https://www.onlc.com/blog/wp-content/uploads/2017/07/ONLC-2017-4.png', 

    4: 'https://www.clio.com/wp-content/uploads/2020/08/Clio_2020-Blog_Image-Programming_for_Lawyers.png', 

    5: 'https://contentstatic.techgig.com/photo/88751917/7-programming-languages-every-beginner-should-explore.jpg?35120', 

    6: 'https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/robot-code-robotics-robotic-programming-language.png', 

    7: 'https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg', 

    8: 'https://appinventiv.com/wp-content/uploads/sites/1/2019/02/18-Programming-Languages-Redefining-The-Future-Of-Coding-scaled.webp', 

    9: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/How-I-Learned-To-Appreciate-The-Art-Of-Computer-Programming-1.png', 

    10: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/02/best-programming-languages-to-learn.png', 

    11: 'https://cdn-media-1.freecodecamp.org/images/0*ngXgBNNdx6iiWP8q.png', 

    12: 'https://www.analyticsinsight.net/wp-content/uploads/2021/12/Open-Source-Programming-1.jpeg',

    

    13: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg', 

    14: 'https://www.freecodecamp.org/news/content/images/2022/12/main-image.png', 

    15: 'https://www.turing.com/blog/wp-content/uploads/2022/02/programminng-languages-for-ai-scaled.jpg', 

    16: 'https://www.onlc.com/blog/wp-content/uploads/2017/07/ONLC-2017-4.png', 

    17: 'https://www.clio.com/wp-content/uploads/2020/08/Clio_2020-Blog_Image-Programming_for_Lawyers.png', 

    18: 'https://contentstatic.techgig.com/photo/88751917/7-programming-languages-every-beginner-should-explore.jpg?35120', 

    19: 'https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/robot-code-robotics-robotic-programming-language.png', 

    20: 'https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg', 

    21: 'https://appinventiv.com/wp-content/uploads/sites/1/2019/02/18-Programming-Languages-Redefining-The-Future-Of-Coding-scaled.webp', 

    22: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/How-I-Learned-To-Appreciate-The-Art-Of-Computer-Programming-1.png', 

    23: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/02/best-programming-languages-to-learn.png', 

    24: 'https://cdn-media-1.freecodecamp.org/images/0*ngXgBNNdx6iiWP8q.png', 

    25: 'https://www.analyticsinsight.net/wp-content/uploads/2021/12/Open-Source-Programming-1.jpeg',

    

    26: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg', 

    27: 'https://www.freecodecamp.org/news/content/images/2022/12/main-image.png', 

    28: 'https://www.turing.com/blog/wp-content/uploads/2022/02/programminng-languages-for-ai-scaled.jpg', 

    29: 'https://www.onlc.com/blog/wp-content/uploads/2017/07/ONLC-2017-4.png', 

    30: 'https://www.clio.com/wp-content/uploads/2020/08/Clio_2020-Blog_Image-Programming_for_Lawyers.png', 

    31: 'https://contentstatic.techgig.com/photo/88751917/7-programming-languages-every-beginner-should-explore.jpg?35120', 

    32: 'https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/robot-code-robotics-robotic-programming-language.png', 

   33: 'https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg', 

    34: 'https://appinventiv.com/wp-content/uploads/sites/1/2019/02/18-Programming-Languages-Redefining-The-Future-Of-Coding-scaled.webp', 

    35: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/How-I-Learned-To-Appreciate-The-Art-Of-Computer-Programming-1.png', 

    36: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/02/best-programming-languages-to-learn.png',

    // 11: 'https://cdn-media-1.freecodecamp.org/images/0*ngXgBNNdx6iiWP8q.png', 

    // 12: 'https://www.analyticsinsight.net/wp-content/uploads/2021/12/Open-Source-Programming-1.jpeg',
    37: 'https://cdn-media-1.freecodecamp.org/images/0*ngXgBNNdx6iiWP8q.png', 

    38: 'https://www.analyticsinsight.net/wp-content/uploads/2021/12/Open-Source-Programming-1.jpeg', 

    39: 'https://www.turing.com/blog/wp-content/uploads/2022/02/programminng-languages-for-ai-scaled.jpg', 

    40: 'https://www.freecodecamp.org/news/content/images/2022/12/main-image.png', 

    41: 'https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg', 

    42: 'https://appinventiv.com/wp-content/uploads/sites/1/2019/02/18-Programming-Languages-Redefining-The-Future-Of-Coding-scaled.webp', 

    43: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/How-I-Learned-To-Appreciate-The-Art-Of-Computer-Programming-1.png', 

    44: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/02/best-programming-languages-to-learn.png'

    

}

let link = []

console.log()

number = 0
// for(number in imgArr){
//     console.log(number)
// }



response.then((v)=>{
    return v.json()

}).then((contests)=>{
    console.log(contests)
    ihtml = ""

    for(item in contests){

        console.log(contests[item])
        ihtml += 
        `<div class="card my-2 mx-2" style="width: 22rem;" >
        <img src="${imgArr[number]}" style="height: 200px">
          <h5 class="card-title">${contests[item].name.slice(0,15)}... </h5>
          <p>Site is: ${contests[item].site}</p>
          <p>Status is: ${contests[item].status}</p>
          <p>In 24 Hours?: ${contests[item].in_24_hours}</p>
          <p>Start at: ${new Date(contests[item].start_time).toGMTString()}</p>
          <p>End at: ${new Date(contests[item].end_time).toGMTString()}</p>
          <a href="${contests[item].url}" class="btn btn-primary" target="_blank">Visit Contest</a>
        </div>
      </div>
      `
      
      number = number + 1
      
    }
    cardContainer.innerHTML = ihtml
    
})






