import React from 'react'
import './CounselorCard.css'
import { Button, Card, Image, Modal, Input, TextArea, Form } from 'semantic-ui-react'


handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault();
}
const CounselorCard = () => (
    <Card>
        <Image
            label={{color:'black', content: '3명', icon:'user', ribbon:true}}
            src='https://wonderfulmind.co.kr/wp-content/uploads/2017/11/Freud-smoking.jpg'/>
        <Card.Content>
            <Card.Header>
                지그문트 프로이트
            </Card.Header>
            <Card.Meta>
                [마포구/개인/10만원]<p/>
                우울/불안/공황
            </Card.Meta>
        </Card.Content>
        <Card.Content>
            <Modal trigger={<Button>자세히보기</Button>}>
                <Modal.Header>지그문트 프로이트</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src='https://wonderfulmind.co.kr/wp-content/uploads/2017/11/Freud-smoking.jpg'/>
                    <Modal.Description>
                        <p>빈 대학교 의과 대학 출신</p>
                        <p>정신분석학 창시</p>
                        <p>괴테상 수상(심리학 부분)</p>
                        <p>가격 : 10만원</p>
                        <p>장소 : 영국</p>
                        <p>시간 : 2018년08월11일</p>
                        <p>특이사항 : 꿈의 분석 가능</p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
            <Modal trigger={<Button>신청하기</Button>}>
                <Modal.Header>상담 신청</Modal.Header>
                <Modal.Content>
                    <Form>
                    <Input fluid type='text' placeholder='이름'/><p/>
                    <Input fluid placeholder='전화번호'/><p/>
                    <TextArea placeholder='상담 내용'/><p/>
                    <Button circular icon='check'/>
                    </Form>
                </Modal.Content>
            </Modal>
        </Card.Content>
    </Card>
)

export default CounselorCard;