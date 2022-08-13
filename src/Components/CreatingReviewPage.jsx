import React from 'react'
import { useState, useMemo } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import countryList from 'react-select-country-list';

const CreatingReviewPage = ({ isAuth }) => {
  const[year, setYear] = useState();
  const[university, setUniversity] = useState();
  const[country, setCountry] = useState();
  const countries = useMemo(() => countryList().getData(), []);
  const[highschool, setHighschool] = useState();
  const[reason, setReason] = useState();
  const[otherAcceptedUniversity, setotherAcceptedUniversity]  = useState();
  const[testScore, setTestScore] = useState();
  const[howToGetTestScore, setHowToGetTestScore] = useState();
  const[englishScore, setEnglishScore] = useState();
  const[howToStudyEnglish, setHowToStudyEnglish] = useState();
  const[gpa, setGpa] = useState();
  const[essay, setEssay] = useState();
  const[opposite, setOpposite] = useState();
  const[agent, setAgent] = useState();
  const[schedule, setSchedule] = useState();
  const[scholarship, setScholarship] = useState();
  const[foundation, setFoundation] = useState();
  const[regret, setRegret] = useState();
  const[importantPoint, setImportantPoint] = useState();
  const[sns, setSns] = useState();
  const[message, setMessage] = useState();

  

  const createPost = async() => {
    await addDoc(collection(db, "posts"), {
      year: year,
      university: university,
      country: country,
      highschool: highschool,
      reason: setReason,
      otherAcceptedUniversity: otherAcceptedUniversity,
      testScore: testScore,
      howToGetTestScore: howToGetTestScore,
      englishScore: englishScore,
      howToStudyEnglish: howToStudyEnglish,
      gpa: gpa,
      essay: essay,
      opposite: opposite,
      agent: agent,
      schedule: schedule,
      scholarship: scholarship,
      foundation: foundation,
      regret: regret,
      importantPoint: importantPoint,
      sns: sns,
      message: message,
    })
  }

  return (
    <>
    {!isAuth 
      ? 
      (<div className='PleaseLogin'>ログインしてください</div>)
      :
      (
      
      <div className='createReviewPage'>

        <h1>体験記を投稿する</h1>

        <div className='year'>
          <div>受験年度</div>
            <select
                label="Select"
                onChange={(e) => setYear(e.target.value)}
            >
              <option>2012年以前</option>
              <option>2013年</option>
              <option>2014年</option>
              <option>2015年</option>
              <option>2016年</option>
              <option>2017年</option>
              <option>2018年</option>
              <option>2019年</option>
              <option>2020年</option>
              <option>2021年</option>
            </select>
        </div>

        <div className='university'>
          <div>大学名</div>
            <input
              type="text"
              onChange={(e) => setUniversity(e.target.value)}
            />
        </div>

        <div className='country'>
          <div >大学のある国</div>
            <select>
              {countries.map((option) => (
                <option >
                  {option.label}
                </option>
              ))}
            </select>
        </div>

        <div className='highschool'>
          <div>出身高校</div>
          <select
              onChange={(e) => setHighschool(e.target.value)}
          >
            <option>首都圏私立</option>
            <option>首都圏公立</option>
            <option>地方私立</option>
            <option>地方公立</option>
            <option>国内インターナショナルスクール</option>
            <option>海外</option>
            <option>通信制</option>
            <option>大卒検定</option>
            <option>その他</option>
          </select>
        </div>
        
        <div className='reason'>
          <div>留学理由・きっかけについて教えてください</div>
            <textarea
              type="text"
              onChange={(e) => setReason(e.target.value)}
            />
        </div>

        <div className='otherAcceptedUniversity'>
          <div>他の合格校を教えてください</div>
            <textarea
              type="text"
              onChange={(e) => setReason(e.target.value)} 
            />
        </div>

        <div className='testScore'>
          <div>外部テストスコア(SAT・ACT・共通テストなど)</div>
            <input
              type="text"
              onChange={(e) => setTestScore(e.target.value)}
            />
          <div>対策方法</div>
            <textarea 
              type="text"
              onChange={(e) => setHowToGetTestScore(e.target.value)}
            />
        </div>
       
        <div className='englishScore'>
          <div>語学テストスコア(IELTS・TOEFLなど)</div>
            <input 
              type="text"
              onChange={(e) => setEnglishScore(e.target.value)}
              />
            <div>対策方法</div>
            <textarea 
              type="text"
              onChange={(e) => setHowToStudyEnglish(e.target.value) }
            />
        </div>

        <div className='gpa'>
          <div>GPA・評定</div>
              <input
                type="text"
                onChange={(e) => setGpa(e.target.value)}
              />
        </div>

        <div className='essay'>
          <div>エッセイの内容を教えてください</div>
              <textarea
                type="text"
                onChange={(e) => setEssay(e.target.value)}
              />
        </div>

        <div className='opposite'>
          <div>周囲からの反対はありましたか？あった場合、どのように説得しましたか？</div>
              <textarea
                type="text"
                onChange={(e) => setOpposite(e.target.value)}
              />
        </div>

        <div className='agent'>
          <div>留学エージェントや留学専門塾は利用しましたか？</div>
              <input
                type="radio"
                onChange={(e) => setAgent(e.target.value)}
                name="agent"
                value="yes"
              />
                はい
              <input 
                type="radio"
                onChange={(e) => setAgent(e.target.value)}
                name="agent"
                value="no"
              />
                いいえ
        </div>

        <div className='schedule'>
          <div>出願までのスケジュールを教えてください</div>
            <textarea
              type="text"
              onChange={(e) => setOpposite(e.target.value) }
              helperText="(例)高3の4月~7月スコアメイク 6月～10月エッセイ執筆 10月推薦書依頼" 
              />
        </div>

        <div className='scholarship'>
          <div>給付型の奨学金は受給しましたか？</div>
            <input
                  type="radio"
                  onChange={(e) => setScholarship(e.target.value)}
                  name="scholarship"
                  value="yes"
                />
                  はい
                <input 
                  type="radio"
                  onChange={(e) => setScholarship(e.target.value)}
                  name="scholarship"
                  value="no"
                />
                  いいえ
        </div>
        
        <div className='foundation'>
          <div>【任意】奨学金の金額や給付元(大学からや財団からなど)</div>
            <textarea
              type="text"
              onChange={(e) => setFoundation(e.target.value) }
              />
        </div>

        <div className='regret'>
          <div>出願準備の中で失敗談や後悔していることがあれば教えてください</div>
            <textarea
            type="text"
            onChange={(e) => setOpposite(e.target.value) }
            />
        </div>

        <div className='importantPoint'>
          <div>大学選びで重視したことを教えてください</div>
            <textarea
              type="text"
              onChange={(e) => setImportantPoint(e.target.value)}
            />
        </div>

        <div className='sns'>
          <div>【任意】後輩たちが質問やメッセージを送ってもOKなSNSアカウントを教えてください</div>
            <textarea 
              type="text"
              onChange={(e) => setSns(e.target.value)}
            />
        </div>  

        <div className='message'>
          <div>最後に一言お願いします！</div>
            <textarea 
              type="text"
              onChange={(e) => setMessage(e.target.value)}
            />
        </div>

        <button 
            className='postButton'
            onClick={createPost}
        >
          投稿
        </button>
        </div>
)
      
      }
    
      
    </>
    
  )
}

export default CreatingReviewPage