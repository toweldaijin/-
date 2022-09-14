import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { collection, deleteDoc, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { async } from '@firebase/util';
import { doc } from 'firebase/firestore';
import "./ReviewList.css";


const ReviewList = ( {postList} ) => {
   

    /* const handleDelete = async (id) => {
        await deleteDoc(doc(db, "posts", id));
    }; */

    return(
        
       <>
        {
            <div className="reviews">
                {postList.map((post) => 
                    
                    <div className="reviewContents" key={post.id}>
                        <h4>受験年度</h4>
                            <p>{post.year}</p>
                        <h4>大学名</h4>
                            <p>{post.university}</p>
                        <h4>大学のある国</h4>
                             <p>{post.country}</p>
                        <h4>出身高校</h4>
                            <p>{post.highschool}</p>
                        <h4>留学理由・きっかけ</h4>
                            <p>{post.reason}</p>
                        <h4>他に合格した大学</h4>
                            <p>{post.otherAcceptedUniversity}</p>
                        <h4>学力テストスコア</h4>
                            <p>{post.testScore}</p>
                        <h4>上記テストの勉強方法</h4>
                            <p>{post.howToGetTestScore}</p>
                        <h4>英語のテストスコア</h4>
                            <p>{post.englishScore}</p>
                        <h4>上記テストの勉強方法</h4>
                            <p>{post.howToStudyEnglish}</p>
                        <h4>GPA・評定平均</h4>
                            <p>{post.gpa}</p>
                        <h4>エッセイの内容</h4>
                            <p>{post.essay}</p>
                        <h4>親や教師などからの反対</h4>
                            <p>{post.opposite}</p>
                        <h4>留学エージェントや留学専門塾の理由有無</h4>
                            <p>{post.agent}</p>
                        <h4>出願までのスケジュール</h4>
                            <p>{post.schedule}</p>
                        <h4>給付奨学金の受給有無</h4>
                            <p>{post.scholarship}</p>
                        <h4>奨学金の金額・給付元</h4>
                            <p>{post.foundation}</p>
                        <h4>奨学金適用前の1年の学費</h4>
                            <p>{post.tuition}</p>
                        <h4>1ヶ月の生活費</h4>
                            <p>{post.costOfLiving}</p>
                        <h4>大学選びで重視したこと</h4>
                            <p>{post.importantPoint}</p>
                        <h4>出願を進める中で後悔していること</h4>
                            <p>{post.regret}</p>
                        <h4>後輩たちが質問やメッセージを送ってもOKなSNSアカウント</h4>
                            <p>{post.sns}</p>
                        <h4>最後に一言</h4>
                             <p>{post.message}</p>
                                {/* {post.author.id === auth.currentUser.uid && (  */}
                                    {/* <button onClick={() => handleDelete(post.id)}>削除</button> */}
                            {/*  )} */}  
                    </div>    
                )
                    
                }
            </div>}
        </>
            
    )
        
    
  
}



export default ReviewList