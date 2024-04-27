import React from 'react';
import './ComplaintModal.scss'
import logo from '../../assets/CompaliantModal/bublik-left-top.svg'
import triangle from '../../assets/CompaliantModal/triangle.svg'
const ComplaintModal = () => {
    return (
        <div className='complaint_modal'>
            <div className='complaint_modal-top'>
                <div className='complaint_modal-top-left'>
                    <img className='complaint_modal-top-left-img' src={logo} alt=""/>
                </div>
                <img className='tringle' src={triangle} alt=""/>
                <div className='complaint_modal-top-right' >
                    <p className='complaint_modal-top-right-text'>Привет, ya_Booblik, я забочусь о каждом госте. Если у вас есть комментарии, пожалуйста, напишите мне!</p>
                </div>
            </div>
            <div className='complaint_modal-midlle'>
                <span className='complaint_modal_midlle-text'>Как к вам обращаться?</span>
                <input className='complaint_modal_midlle-data' type="text" placeholder='ФИО'/>
                <span className='complaint_modal_midlle-text'>Номер вашего тел.</span>
                <input className='complaint_modal_midlle-data' type="number" placeholder='+996'/>
                <span className='complaint_modal_midlle-text'>Укажите филиал:</span>
                <select className='complaint_modal_midlle-data'>
                    <option></option>
                    <option className='complaint_modal_midlle-text' value="option1">Первый</option>
                    <option className='complaint_modal_midlle-text' value="option2">Второй</option>
                    <option className='complaint_modal_midlle-text' value="option3">Третий</option>
                </select>
            </div>
            <div className='complaint_modal-bottom'>
                <span className='complaint_modal_midlle-text' id='complaint_modal_midlle_text-individ'>Ваша жалоба или рекомендация</span>
                <textarea type="text" className='complaint_modal_midlle-data' id='complaint_modal_midlle_data-individ'/>
            </div>
        </div>
    );
};

export default ComplaintModal;