export const sendToWinner = async(winner,revenue) =>{
  try{
    return new Promise((resolve, reject) => {
      if (typeof window.hive_keychain === 'undefined') {
        reject('Hive Keychain extension is not installed');
      }else {
        window.hive_keychain.requestSendToken('admin-pizza',winner,revenue, 'Buying a Lottery Ticket', 'PIZZA', (response) => {
          if (response.success) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      }
    });
  }catch(error){
    console.error(error);
  }
}
export const buyTicket = async(username) => {
  try{
    return new Promise((resolve, reject) => {
      if (typeof window.hive_keychain === 'undefined') {
        reject('Hive Keychain extension is not installed');
      }else {
        window.hive_keychain.requestSendToken(username, 'admin-pizza', '0.010', 'Buying a Lottery Ticket', 'PIZZA', (response) => {
          if (response.success) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      }
    });
  }catch(error){
    console.error(error);
  }
}