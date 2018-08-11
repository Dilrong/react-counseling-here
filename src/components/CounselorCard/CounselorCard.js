import React from 'react'
import './CounselorCard.css'
import { Button, Card, Image, Modal, Input, TextArea, Form } from 'semantic-ui-react'

const CounselorCard = ({ data }) => (
    <Card>
        <Image
            label={{color:'black', content: data.personnel+'명', icon:'user', ribbon:true}}
            src={data.photo_url}/>
        <Card.Content>
            <Card.Header>
                {data.name}
            </Card.Header>
            <Card.Meta>
                {data.type}, {data.price}원<p/>
                {data.category}
            </Card.Meta>
        </Card.Content>
        <Card.Content>
            <Modal trigger={<Button>자세히보기</Button>}>
                <Modal.Header>{data.name}</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src={data.photo_url}/>
                    <Modal.Description>
                        {data.history}<p/>
                        위치 : {data.location}
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