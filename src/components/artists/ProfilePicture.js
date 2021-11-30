// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
// import * as Font from "../styles/Font"
import Icon from "../ui/Icon"

// Styles
const Container = styled.div``

const Picture = styled.img``

const IconContainer = styled.span`
    
`

const Input = styled.input``

function ProfilePicture(props) {
    return props.edit ? (
        <Container>
            <Picture src={props.src} alt={props.alt} />
            
            <IconContainer>
                <Icon name="edit" size={24} color={Variables.ThemeColors.Primary} />
            </IconContainer>

            <Input type="file" name="picture" id="picture" />
        </Container>
    ) : (
        <Picture src={props.src} alt={props.alt} />
    )
}

export default ProfilePicture
