
/** Connect to Moralis server */
const serverUrl = "https://bgbnoaq8u8pv.usemoralis.com:2053/server";
const appId = "emh689cheGPiFrhpoO3fmfS6goA71sTeGnsNWToG";
Moralis.start({ serverUrl, appId });

/** Add from here down */
async function init(){
    await Moralis.initPlugins();
    await Moralis.enable();
    await listAvailableTokens(); 
}
async function listAvailableTokens(){
    
        const tokens = await Moralis.Plugins.oneInch.getSupportedTokens({
          chain: 'eth' // The blockchain you want to use (eth/bsc/polygon)
        });
        console.log(tokens);
      }
      

    async function login() {
        let user = Moralis.User.current();
        if (!user) {
            try {
                user = await Moralis.authenticate({ signingMessage: "Hello World!" })
                console.log(user)
                console.log(user.get('ethAddress'))
            } catch (error) {
                console.log(error)
            }
        }
    }


async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

function openModal(){ 
  document.getElementById("token_modal").style.display = "block";

}
function closeModal(){
  document.getElementById("token_modal").style.display = "none";
}

init();

document.getElementById("modal_close").onclick = closeModal;
document.getElementById("from_token_select").onclick = openModal;
document.getElementById("to_token_select").onclick = openModal;  
document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut; 
/*Useful Resources


 https://docs.moralis.io/moralis-server/users/crypto-login
 https://docs.moralis.io/moralis-server/getting-started/quick-start#user
 https://docs.moralis.io/moralis-server/users/crypto-login#metamask

 Moralis Forum 

 https://forum.moralis.io */