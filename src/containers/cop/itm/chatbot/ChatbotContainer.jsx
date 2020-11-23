import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


export const ItemSearch = () => {
        return (<>

        </>)
    
}

export const ItemSearch2 = () => {
    return (
            <p>정보가 없습니다.</p>

    )

}

// all available props
const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#ffb74d',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#ffb74d',
    botFontColor: '#black',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
    width: "500",
    height: "900"
  };

export default function ChatBotContainer () {
    return (
    <ThemeProvider theme={theme}>        
        <ChatBot
            style={{ width: '700px'}}
            floating = {true}
            headerTitle = {'서비스'}
            enableSmoothScroll = {true}
            steps={[
                //서비스선택
                {
                    id: '1',
                    message: '원하시는 서비스를 선택해주세요.',
                    trigger: '2',
                },
                {
                    id: '2',
                    options: [
                        { value: 1, label: '치즈 추천 받기', trigger: 'recommend' },
                        { value: 2, label: '치즈 종류 소개', trigger: 'category' },
                        { value: 3, label: '구독회원', trigger: 'fare' },
                        { value: 4, label: '비회원', trigger: 'fare' },
                    ],
                },
                {
                    id: 'recommend',
                    message: '고객님의 치즈 취향을 파악하여 추천받으시겠습니까?',
                    trigger: 'recommend0'
                },
                {
                    id: 'recommend0',
                    options: [
                        { value: 1, label: '네. 치츠 추천 받으러 갈게요!', trigger: 'recommend1' },
                        { value: 2, label: '아니요. 그냥 치즈 상품 구경하러 갈게요!', trigger: 'cheeseList' },
                        { value: 3, label: '다른 치즈 종류도 궁금해요!', trigger: 'category' },
                    ],
                },
                {
                    id: 'recommend1',
                    message: '그러면 고객님의 치즈 취향을 분석해보겠습니다. 총 5가지의 질문을 드리겠습니다!',
                    trigger: 'question_1',
                },
                {
                    id: 'question_1',
                    // message: '치즈나 음식의 어떤 맛을 선호하시나요?',
                    options: [
                        { value: 1, label: '단맛', trigger: 'recommend1' },
                        { value: 2, label: '짠맛', trigger: 'cheeseList' },
                    ],
                    trigger: 'recommend3',
                },
                {
                    id: 'recommend3',
                    options: [
                        { value: 1, label: '단맛', trigger: 'recommend1' },
                        { value: 2, label: '짠맛', trigger: 'cheeseList' },
                        { value: 3, label: '신맛', trigger: 'category' },
                        { value: 3, label: '쓴맛', trigger: 'category' },
                        { value: 3, label: '담백한 맛', trigger: 'category' },
                    ],
                },
                {
                    id: 'recommend4',
                    message: '치즈나 음식 중에서 어떤 맛을 선호하시나요?',
                    trigger: 'recommend3',
                },
                {
                    id: 'recommend5',
                    options: [
                        { value: 1, label: '네. 치츠 추천 받으러 갈게요!', trigger: 'recommend1' },
                        { value: 2, label: '아니요. 그냥 치즈 상품 구경하러 갈게요!', trigger: 'cheeseList' },
                        { value: 3, label: '다른 치즈 종류도 궁금해요!', trigger: 'category' },
                    ],
                },
                {
                    id: 'recommend1',
                    message: '그러면 고객님의 치즈 취향을 분석해보겠습니다. 총 5가지의 질문을 드리겠습니다!',
                    trigger: 'itemSearchResult',
                },
                // {
                //     id: 'category',
                //     message: '제품명을 입력하세요',
                //     trigger: 'itemSearch',
                // },
                // {
                //     id: 'category',
                //     options: [
                //         { value: 1, label: '리코타', trigger: 'itemSearch' },
                //         { value: 2, label: '파마산', trigger: 'itemSearch' },
                //         { value: 3, label: '모짜렐라', trigger: 'itemSearch' },
                //         { value: 4, label: '블루치즈', trigger: 'itemSearch' },
                //         { value: 5, label: '체다', trigger: 'itemSearch' },
                //         { value: 6, label: '브리', trigger: 'itemSearch' }
                //     ],
                // },
                {
                    id: 'category',
                    options: [
                        { value: 1, label: '리코타', trigger: 'ricotta' },
                        { value: 2, label: '까망베르', trigger: 'camembert'},
                        { value: 3, label: '모짜렐라', trigger: 'mozzarella' },
                        { value: 4, label: '체다', trigger: 'cheddar' },
                        { value: 5, label: '브리', trigger: 'brie' }
                    ],
                },
                {
                    id: 'ricotta',
                    message: '프레쉬 크림치즈의 일종인 리코타는 입자가 고와 약간 얼은 생크림 같고 순백색으로 부드럽습니다. 샐러드, 파스타, 빵이나 스낵과도 잘 어울리는 치즈입니다',
                    trigger: 'recommend'
                },
                {
                    id: 'camembert',
                    message: '파마산 치즈는 블록 형태로 가루를 내어 많은 요리에 쓰이는 치즈입니다. 좋은 와인과 그렇지 못한 와인을 가리는 품질평가회에서도 쓰입니다. 전세계적으로 피자나 파스타에 뿌려먹습니다.',
                    trigger: 'recommend'
                },
                {
                    id: 'mozzarella',
                    message: '리코타 치즈와 함께 가장 유명한 치즈입니다. 가열하였을 때 녹고 잡아당기면 늘어나는 특징이 있어서 피자 토핑에 이용되고 있습니다.',
                    trigger: 'recommend'
                },
                {
                    id: 'cheddar',
                    message: '풍부하고 부드러운 특유의 향과 맛으로 유명합니다. 샌드위치, 햄버거, 샐러드 등에 쓰입니다.',
                    trigger: 'recommend'
                },
                {
                    id: 'brie',
                    message: '부드러운 나무향과 버섯향이 진한 흰곰팡이 치즈로 치즈의 여왕이라고도 합니다. 레드와인과 잘 어울리고 냉장고에서 미리 꺼내두어 물렁하게 드시면 맛있습니다. ',
                    trigger: 'recommend'
                },

                {
                    id: 'cheeseList',
                    user: true,
                    trigger: 'itemSearchResult',
                },
                {
                    id: 'itemSearchResult',
                    component: <ItemSearch/>,
                    trigger: '1',
                },
                {
                    id: 'fare',
                    message: '주문사항을 입력해주세요.',
                    trigger: 'startName',
                },
                {
                    id: 'startName',
                    user: true,
                    trigger: 'fare1',
                },
                {
                    id: 'fare1',
                    message: '주문사항을 입력해주세요.',
                    trigger: 'arriveName'
                },
                {
                    id: 'arriveName',
                    user: true,
                    trigger: 'fareResult',
                },
                {
                    id: 'fareResult',
                    component: <ItemSearch2/>,
                    trigger: '1',
                },
            ]}
        />
    </ThemeProvider>    
)}

// class CheeseKinds extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             name: '',
            
//         }
//     }

// }

// export const ItemSearch = () => {
//         return (<>

//         </>)
    
// }

// export const ItemSearch2 = () => {
//     return (
//             <p>정보가 없습니다.</p>

//     )

// }

// // all available props
// const theme = {
//     background: '#f5f8fb',
//     fontFamily: 'Helvetica Neue',
//     headerBgColor: '#ffb74d',
//     headerFontColor: '#fff',
//     headerFontSize: '15px',
//     botBubbleColor: '#ffb74d',
//     botFontColor: '#black',
//     userBubbleColor: '#fff',
//     userFontColor: '#4a4a4a',
//     width: "500",
//     height: "900"
//     };

// export default function ChatBotContainer () {
//     return (
//     <ThemeProvider theme={theme}>        
//         <ChatBot
//             floating = {true}
//             headerTitle = {'서비스'}
//             enableSmoothScroll = {true}
//             steps={[
//                 //서비스선택
//                 {
//                     id: '1',
//                     message: '원하시는 서비스를 선택해주세요.',
//                     trigger: '2',
//                 },
//                 {
//                     id: '2',
//                     options: [
//                         { value: 1, label: '치즈 종류 소개', trigger: 'category' },
//                         { value: 2, label: '아이템 가격', trigger: 'fare' },
//                     ],
//                 },
//                 // {
//                 //     id: 'category',
//                 //     message: '제품명을 입력하세요',
//                 //     trigger: 'itemSearch',
//                 // },
//                 {
//                     id: 'category',
//                     options: [
//                         { value: 1, label: '리코타', trigger: 'itemSearch' },
//                         { value: 2, label: '파마산', trigger: 'itemSearch' },
//                         { value: 3, label: '모짜렐라', trigger: 'itemSearch' },
//                         { value: 4, label: '블루치즈', trigger: 'itemSearch' },
//                         { value: 5, label: '체다', trigger: 'itemSearch' },
//                         { value: 6, label: '브리', trigger: 'itemSearch' }
//                     ],
//                 },
//                 {
//                     id: 'itemSearch',
//                     user: true,
//                     trigger: 'itemSearchResult',
//                 },
//                 {
//                     id: 'itemSearchResult',
//                     component: <ItemSearch/>,
//                     trigger: '1',
//                 },
//                 {
//                     id: 'fare',
//                     message: '주문사항을 입력해주세요.',
//                     trigger: 'startName',
//                 },
//                 {
//                     id: 'startName',
//                     user: true,
//                     trigger: 'fare1',
//                 },
//                 {
//                     id: 'fare1',
//                     message: '주문사항을 입력해주세요.',
//                     trigger: 'arriveName'
//                 },
//                 {
//                     id: 'arriveName',
//                     user: true,
//                     trigger: 'fareResult',
//                 },
//                 {
//                     id: 'fareResult',
//                     component: <ItemSearch2/>,
//                     trigger: '1',
//                 },
//             ]}
//         />
//     </ThemeProvider>    
// )}