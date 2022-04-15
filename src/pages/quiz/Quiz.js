import React, { useState } from 'react'

const Quiz = () => {
    const [isStarted, setIsStarted] = useState(false)
    const [isSelected, setIsSelected] = useState('')

    const Questions = [
        {
            question: 'Cryptocurrency transactions can be traced by Regulators and law enforcement?',
            ans: 'TRUE',
            // ans:{a:'TRUE'},
            options: [
                'TRUE',
                'FALSE' ,
            ]
        },
        {
            question: 'Cryptocurrencies and blockchain are the same thing?',
            ans: 'NO',
            // ans:{b:'NO'},
            option: [
                'YES' ,
                'NO' ,
            ]
        },
        {
            question: 'On which Asset, Investors can trade 24 hours?',
            ans: 'Crypto Currencies',
            option: [
                'Stocks' ,
                'Crypto Currencies' ,
                'None of Above' 
            ]
        },
        {
            question: 'Which one is Fiat currency?',
            ans: 'USD',
            option: [
                'USD',
                'USDT',
                'BUSD' 
            ]
        }
    ]

    return (
        <>
            <div className='set-quiz'>
                {!isStarted ?
                    <>
                        <img src='./assets/image/quiz-img.jpg' alt="" width="100%" height="100%" />
                        <h1 className='set-quiz-frist-text'>INVESTOR PREDICTION</h1>
                        <button className='set-quiz-start-btn' onClick={() => setIsStarted(true)}>Start</button>
                    </>
                    :
                    <>
                        {Questions?.length ? Questions.map((item, i) =>
                            <>
                                <p>{item.question}</p>
                                <div className='d-flex flex-column'>
                                    {
                                        item.options?.length ? item.options.map((optItem) =>
                                            <div className={`radio-btn ${isSelected === 'true' && 'radio-bg'}`}>
                                                <label class="lable-container">{optItem}
                                                    <input type="radio" name="radio" onChange={() => setIsSelected('true')} />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        ) : <></>
                                    }

                                    {/* <div className={`radio-btn ${isSelected === 'false' && 'radio-bg'}`}>
                                        <label class="lable-container">False
                                            <input type="radio" name="radio" onChange={() => setIsSelected('false')} />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div> */}
                                </div>
                                <button className='set-quiz-start-btn'>prev</button>
                                <button className='set-quiz-start-btn'>Next</button>
                            </>
                        ) : <></>}

                    </>}
            </div>
        </>
    )
}

export default Quiz
