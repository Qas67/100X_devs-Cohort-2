/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let vist_idx=[];
  let obj_arr=[];
  for(let i=0;i<transactions.length;i++){
    let priced= transactions[i].price;
    if(!(vist_idx.includes(i))){
    for(let j=i+1;j<transactions.length;j++){
        if((transactions[i]).category==(transactions[j]).category){
          vist_idx.push(j);
          priced=priced+transactions[j].price;
        }
      }
      let obj={
        category: transactions[i].category,
        totalSpent: priced 
      };
      obj_arr.push(obj);
    }
  }
  return obj_arr;
}

module.exports = calculateTotalSpentByCategory;
