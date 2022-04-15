import React, { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'

const Quiz = () => {

    const Questions = [
        {
            question: 'Cryptocurrency transactions can be traced by Regulators and law enforcement?',
            ans: 'TRUE',
            // ans:{a:'TRUE'},
            options: [
                'TRUE',
                'FALSE',
            ],
            userAns: '',
            isUserAnsTrue: false
        },
        {
            question: 'Cryptocurrencies and blockchain are the same thing?',
            ans: 'NO',
            // ans:{b:'NO'},
            options: [
                'YES',
                'NO',
            ],
            userAns: '',
            isUserAnsTrue: false
        },
        {
            question: 'On which Asset, Investors can trade 24 hours?',
            ans: 'Crypto Currencies',
            options: [
                'Stocks',
                'Crypto Currencies',
                'None of Above'
            ],
            userAns: '',
            isUserAnsTrue: false
        },
        {
            question: 'Which one is Fiat currency?',
            ans: 'USD',
            options: [
                'USD',
                'USDT',
                'BUSD'
            ],
            userAns: '',
            isUserAnsTrue: false
        }
    ]

    const [isStarted, setIsStarted] = useState(false)
    const [seeResult, setSeeResult] = useState(false)
    const [current, setCurrent] = useState(0)
    const [questions, setQuestions] = useState(Questions)

    const selectAns = (questionI, answer) => {
        console.log("questionI, answer", questionI, answer);
        setQuestions(questions.map((que, index) => {
            if (index === questionI) {
                return {
                    ...que,
                    userAns: answer,
                    isUserAnsTrue: (que.ans === answer)
                }
            } else {
                return que
            }
        })
        )
    }

    useEffect(() => {
        console.log("questions", questions);
    }, [questions])
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
                    !seeResult ? <>
                        <div className='count'>
                            {current} / {questions.length}
                        </div>
                        {questions?.length ? questions.map((item, i) =>
                            <>

                                {current === i && <>
                                    <p>{item.question}</p>
                                    <div className='d-flex flex-column'>
                                        {
                                            item.options?.length ? item.options.map((optItem) => {
                                                { console.log("item.userAns === optItem", item.userAns, optItem, item.userAns === optItem) }
                                                return <>
                                                    <div className={`radio-btn ${item.userAns === optItem && 'radio-bg'}`}>
                                                        <label className="lable-container">{optItem}
                                                            <input type="radio" name="radio" checked={item.userAns === optItem} onChange={() => selectAns(i, optItem)} />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </>
                                            }) : <></>
                                        }
                                    </div>
                                    <div className='d-flex justify-content-center gap-2'>
                                        {current !== 0 && <button className='set-quiz-start-btn' onClick={() => setCurrent(i - 1)}>prev</button>}
                                        {current !== Questions.length - 1 ? <button className='set-quiz-start-btn' onClick={() => setCurrent(i + 1)}>Next</button> :
                                            <button className='set-quiz-start-btn' onClick={() => setSeeResult(true)}>See Result</button>}
                                    </div>
                                </>}
                            </>
                        ) : <></>
                        }

                    </> :
                        seeResult &&
                        <>
                            <div className='mb-3'>
                                <p className='mb-0'>Your score is 0%</p>
                                <p>The average score is 71%</p>
                            </div>
                            <ProgressBar now={60} />
                            <div className='mt-3'>
                                <button className='set-quiz-start-btn'>Restart quiz</button>
                            </div>
                            {questions?.length ? questions.map((item, i) =>
                                <>
                                        <div className='result-count mt-3'>{i + 1} / {questions.length}</div>
                                    <div className='c_result'>
                                        <div className='result-car'>
                                            {!item.userAns && <p className='error-text'>You have not answered this question</p>}
                                            <p>{item.question}</p>
                                            <div className='d-flex flex-column'>
                                                {
                                                    item.options?.length ? item.options.map((optItem) => {
                                                        { console.log("item.userAns === optItem", item.userAns, optItem, item.userAns === optItem) }
                                                        return <>
                                                            <div className={` ${item.userAns === optItem && 'radio-bg'} ${item.ans === optItem && "radio-bg-green"} ${item.ans !== optItem && item.userAns === optItem && 'radio-bg-red'}`}>
                                                                <label className="lable-container">{optItem}
                                                                    <input disabled={true} type="radio" name="radio" onChange={() => selectAns(i, optItem)} />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </>
                                                    }) : <></>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : <></>}
                        </>
                }
            </div>
        </>
    )
}

export default Quiz
