const data = {
    shooting : 99,
    dribblin : 50,
    jumping : 70,
}

// const jumping = data.jumping;
// const shooting =data.shooting;
// this is annoying as we have to repeat data
//destructuring makes it easier by extracting multiple properties 
const {jumping,shooting}=data; // in this case we have to use same name as property
//expanded form 
const {jumping:jumpAbility,shooting:shootAbility}=data; // we can rename while destructuring

const num=[1,2,3,4];
const [first,_,third]=num; //skipping second element
// this is not destructuring assignment
console.log(first,third); //1 3