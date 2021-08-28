const copyBtn = document.querySelector('.copy_btn');
const facebookShare = document.querySelector('.facebook_share');

const kakaoShare = document.querySelector('.kakao_share');
kakaoShare.scrollIntoView('JavaScript 키를 입력하세요.')

function sendLink() {
    let result_url = window.location.href;
    kakao.link.sendDefault({
        objectType: 'feed', 
        content: {
            title: '나의 개발 유형은 ?',
            description: '나에게 꼭 맞는 개발 유형을 알아보자 !!', 
            imageUrl: 'https://mbit.weniv.co.kr/static/img/mbit_thumbnail.png',
            link: {
                mobieWebUrl : 'https://mbit.weniv.co.kr', 
                webUrl: 'https://mbit.weniv.co.kr',
            },
        },
        social : {
            likeCount: 0,
            commendCount : 0,
            sharedCount: 0,
        },
        buttons: [
            {
                title: '결과 보러가기',
                link: {
                    webUrl: result_url,
                    mobieWebUrl: result_url,
                },
            }, 
            {
                title: '테스트 하러가기', 
                link: {
                    webUrl: 'https://mbit.weniv.co.kr',
                    mobieWebUrl: 'https://mbit.weniv.co.kr',
                },
            },
        ],
    });
}

$(function(){
    let url = window.location.href
    let img = $('.result_img img').attr('src');

    $("meta[property='og:\\url']").attr('content', url)
    $("meta[property='og:\\image']").attr('content', img)
})

function copyUrl() {
    let tmp = document.createElement('input');
    let url = location.href;

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);

    alert('URL 이 복사되었습니다.');
}

function shareFacebook() {
    let url = window.location.href;
    let facebook = 'http://www.facebook.com/sharer/sharer.php?u=';
    let link = facebook + url;
    window.open(link);
}
copyBtn.addEventListener('click', copyUrl)
facebookShare.addEventListener('click', shareFacebook)

kakaoShare.addEventListener('click', sendLink)