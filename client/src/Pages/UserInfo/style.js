import styled from "styled-components"

import {
  PageContainer
} from '../../globalStyles'

export const UserInfoContainer = styled(PageContainer)`
  padding: 5px 25px;
  flex-direction: column;

  .user_info__header {
    background: var(--background);
    position: fixed;
    width: 100%;
    height: fit-content;
    left: 0;
    top: 0;
    padding: 5px 25px;
  }

  .user_info__contents {
    margin-top: 80px;
    padding-bottom: 120px;
  }
`