// step 1

const reviewsContainer = document.querySelector('.reviews-container')
const review = document.querySelector('.review')
const reviewerImage = document.querySelector('.reviewer-image')
const reviewerName = document.querySelector('.name')
const reviewerPosition = document.querySelector('.position')

// step 2

const reviews =
[
    {
      name: 'Miyah Myles',
      position: 'Marketing',
      photo: 'https://randomuser.me/api/portraits/women/1.jpg',
      text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a thoroughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
    },
    {
      name: 'John Smith',
      position: 'Sales',
      photo: 'https://randomuser.me/api/portraits/men/2.jpg',
      text: 'John is an exceptional salesperson. He knows how to communicate with clients effectively and always meets his targets. Working with him is a pleasure.'
    },
    {
      name: 'Emily Johnson',
      position: 'Human Resources',
      photo: 'https://randomuser.me/api/portraits/women/3.jpg',
      text: "Emily is a dedicated HR professional who goes above and beyond to ensure a positive work environment. Her attention to detail and interpersonal skills make her a valuable asset to any team."
    },
    {
      name: 'Michael Davis',
      position: 'Operations',
      photo: 'https://randomuser.me/api/portraits/men/4.jpg',
      text: "Michael is an efficient and reliable operations manager. His strategic thinking and problem-solving abilities contribute significantly to streamlining processes and improving productivity."
    },
    {
      name: 'Olivia Brown',
      position: 'Finance',
      photo: 'https://randomuser.me/api/portraits/women/5.jpg',
      text: "Olivia is a meticulous financial analyst who consistently delivers accurate reports and insightful analysis. Her expertise in data analysis is invaluable to our finance team."
    },
    {
      name: 'James Wilson',
      position: 'IT',
      photo: 'https://randomuser.me/api/portraits/men/6.jpg',
      text: "James is a skilled IT professional with a passion for solving complex problems. He has a deep understanding of software development and is always up-to-date with the latest technologies."
    },
    {
      name: 'Sophia Martinez',
      position: 'Customer Support',
      photo: 'https://randomuser.me/api/portraits/women/7.jpg',
      text: "Sophia is a dedicated customer support representative who consistently goes the extra mile to ensure customer satisfaction. Her friendly demeanor and problem-solving skills make her a valuable team member."
    },
    {
      name: 'Daniel Taylor',
      position: 'Research and Development',
      photo: 'https://randomuser.me/api/portraits/men/8.jpg',
      text: "Daniel is a brilliant researcher with a knack for innovation. His contributions to our research and development team have led to several groundbreaking discoveries."
    },
    {
      name: 'Ava Anderson',
      position: 'Design',
      photo: 'https://randomuser.me/api/portraits/women/9.jpg',
      text: "Ava is a talented designer who brings creativity and attention to detail to every project. Her designs are not only visually appealing but also highly functional."
    },
    {
      name: 'Alexander Clark',
      position: 'Product Management',
      photo: 'https://randomuser.me/api/portraits/men/10.jpg',
      text: "Alexander is a strategic product manager who excels at identifying market opportunities and driving product success. His leadership skills are invaluable in guiding our product team."
    },
    {
      name: 'Ella Rodriguez',
      position: 'Content Writing',
      photo: 'https://randomuser.me/api/portraits/women/11.jpg',
      text: "Ella is a skilled content writer with a talent for crafting engaging and persuasive copy. Her writing style is captivating and helps elevate our brand messaging."
    },
    {
      name: 'William Turner',
      position: 'Business Development',
      photo: 'https://randomuser.me/api/portraits/men/12.jpg',
      text: "William is a charismatic business development professional who builds strong relationships with clients and partners. His negotiation skills and market insights drive business growth."
    },
    {
      name: 'Victoria Lopez',
      position: 'Project Management',
      photo: 'https://randomuser.me/api/portraits/women/13.jpg',
      text: "Victoria is an organized and efficient project manager who ensures that projects are delivered on time and within budget. Her strong communication skills keep all stakeholders informed and aligned."
    },
    {
      name: 'Henry Ward',
      position: 'Quality Assurance',
      photo: 'https://randomuser.me/api/portraits/men/14.jpg',
      text: "Henry is a detail-oriented quality assurance specialist who meticulously tests software to ensure optimal performance. His thoroughness helps deliver high-quality products to our customers."
    },
    {
      name: 'Grace Lee',
      position: 'Data Analysis',
      photo: 'https://randomuser.me/api/portraits/women/15.jpg',
      text: "Grace is a data analysis expert with a deep understanding of statistical methods and data visualization. Her insights drive data-informed decision-making within our organization."
    },
    {
      name: 'Benjamin Martin',
      position: 'Supply Chain',
      photo: 'https://randomuser.me/api/portraits/men/16.jpg',
      text: "Benjamin is a supply chain professional who optimizes logistics and ensures timely delivery of products. His expertise in inventory management keeps our operations running smoothly."
    },
    {
      name: 'Lily Baker',
      position: 'Public Relations',
      photo: 'https://randomuser.me/api/portraits/women/17.jpg',
      text: "Lily is a skilled public relations specialist who effectively manages our brand's image and reputation. Her strategic communication efforts enhance our visibility and credibility."
    },
    {
      name: 'Samuel Green',
      position: 'Legal Counsel',
      photo: 'https://randomuser.me/api/portraits/men/18.jpg',
      text: "Samuel is a knowledgeable legal counsel who provides expert advice and ensures compliance with regulations. His attention to detail and analytical skills are essential in protecting our interests."
    },
    {
      name: 'Sofia Collins',
      position: 'Event Planning',
      photo: 'https://randomuser.me/api/portraits/women/19.jpg',
      text: "Sofia is an experienced event planner who flawlessly executes memorable events. Her organizational skills and attention to detail create seamless and enjoyable experiences for attendees."
    },
    {
      name: 'David Hernandez',
      position: 'Training and Development',
      photo: 'https://randomuser.me/api/portraits/men/20.jpg',
      text: "David is a dedicated training and development specialist who designs and delivers impactful learning programs. His expertise in employee development drives individual and organizational growth."
    },
    {
      name: 'Emma Kelly',
      position: 'Social Media Management',
      photo: 'https://randomuser.me/api/portraits/women/21.jpg',
      text: "Emma is a creative social media manager who crafts engaging content and grows our online presence. Her strategic approach to social media helps us"
    }
]  


// step 3
// define a variable for indexing

let num = 1


// step 4
// create a function to update the reviews

function updateReviews(){
    // console.log(reviews[5])
    const {name, position, photo, text} = reviews[num]

    review.innerHTML = text
    reviewerImage.src = photo
    reviewerName.innerHTML = name
    reviewerPosition.innerHTML = position

    num++

    if(num > reviews.length -1){
        num = 0
    }

}

setInterval(updateReviews, 10000)



// const reviewsContainer = document.querySelector('.reviews-container')
// const review = document.querySelector('.review')
// const reviewerImage = document.querySelector('.reviewer-image')
// const reviewerName = document.querySelector('.name')
// const reviewerPosition = document.querySelector('.position')