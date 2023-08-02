import api from "../../api/api";
import {useEffect, useState} from "react";
import classes from './_infoExercise.module.scss'
import timer from '../../assets/categories/timer.png'
import line from '../../assets/InfoExercises/line.png'
import  eyes from "../../assets/InfoExercises/eyes.mp4"


export const InfoExercises = () => {
    // const [articles, setArticles] = useState([]);
    // const  fetchExercise =async () => {
    //     try {
    //         await  api.get("eye/" ).then((response) => {
    //             return response
    //         })
    //             .then((data)=> {
    //                 setArticles(data.data);
    //             })
    //
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
//
//
//     useEffect(()=> {
//         fetchExercise()
//     },[])


    return (
        <>
            {/*<div>*/}
                {/*{articles.map(article => {*/}
                {/*    return (*/}
                        <div>
                            <div className={classes.infoExercise}>
                                <div className={classes.infoExercise_withoutFlexDirection}>
                                    <div className={classes.infoExercise_img}>
                                            <video controls>
                                                <source src={eyes} type="video/mp4"/>
                                            </video>
                                    </div>
                                    <div className={classes.infoExercise_text}>
                                        <div className={classes.text_name}>
                                            {/*<h3>{article.exercises_number_one}</h3>*/}
                                            <img src={timer} alt={'timer'}/>
                                            <p>3-5 минут</p>
                                        </div>
                                        <div className={classes.infoExercise_inst}>
                                            <div>
                                                <div>
                                                    <span></span>
                                                </div>
                                                <p>Снимает усталость</p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span></span>
                                                </div>
                                                <p>Восстанавливает кровообращение в глазах</p>
                                            </div>
                                            <div>
                                                <div></div>
                                                <p>Укрепляет глазные мышцы</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<div><p>{article.exercises_number_two}</p></div>*/}
                            </div>
                            <div><img src={line} alt={'line'}/></div>
                        </div>
                    {/*);*/}
                {/*})}*/}
            {/*</div>*/}

        </>
    )
}

