import img from 'svg-loaders/svg-loaders/oval.svg'

export default function(text='loading...') {
    let id='loading_'+Math.random().toString().replace('.','')
    let html=`<div  style="position: fixed; z-index: 1000; top: 0; right: 0; left: 0; bottom: 0; background: rgba(0,0,0,.25); display: flex; justify-content: center; align-items: center;">
            <div id="${id}" class="fadeIn" style="box-sizing: border-box;background-color:rgba(18, 18, 18,0.65);  border-radius: 4px; color: white; padding: 20px; font-size: 14px; width: 98px; height: 98px; line-height: 20px; text-align: center; display: flex; flex-wrap: wrap; -ms-flex-wrap: wrap; justify-content: center; align-items: center;">
               <img src="${img}">
                <div style="width: 100%;text-align: center;margin-top: 5px">${text}</div>
            </div>
          </div>`
    let elem = document.createElement('div');
    elem.id=id+'-wrap'
    elem.innerHTML=html
    document.body.appendChild(elem);
    return{
        close(){
            document.getElementById(id+'-wrap').remove()
            // document.getElementById(id).classList.remove('fadeIn')
            // document.getElementById(id).classList.add('fadeOut')
            // setTimeout(()=>{
            //     document.getElementById(id+'-wrap').remove()
            // },1000)
        }
    }

}
