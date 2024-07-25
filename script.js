let quotes=[
  
  {
    id : '',
    quote :"In three words I can sum up everything I've learned about life: It goes on.",
    author :"– Robert Frost"
  } ,
  {
    id : '',
    quote :"The most important thing is to enjoy your life to be happy it's all that matters.",
    author :"– Audrey Hepburn"
  } ,
  {
    id : '',
    quote :"The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
    author :" – Henry Ford"
  } ,
  {
    id : '',
    quote :"I have very strong feelings about how you lead your life. You always look ahead, you never look back",
    author :"– Ann Richards"
  } ,
  {
    id : '',
    quote :"I think I've discovered the secret of life – you just hang around until you get used to it",
    author :"– Charles Schulz"
  } ,
  {
    id : '',
    quote :"Accept no one's definition of your life, define yourself.",
    author :"– Harvey Fierstein"
  } ,
  {
    id : '',
    quote :"Life is very interesting... in the end, some of your greatest pains, become your greatest strengths.",
    author :"– Drew Barrymore"
  } ,
  {
    id : '',
    quote :"I have learned that success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed.",
    author :"– Booker T. Washington"
  } ,

];

function generatequote(){
  let index = Math.floor(Math.random()*quotes.length); 
    let text = quotes[index].quote; 
    let name = quotes[index].author
        // let text=quotes[7].quote;
        document.getElementById("name").value=name;
    document.getElementById("txt").value=text;
}




