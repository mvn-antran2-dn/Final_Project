import React from 'react'
import { Layout} from 'antd';

const { Footer } = Layout;
export default function PageFooter() {
  return (
    <div className="footer">
      <Layout className="layout">
        <Footer className='page-footer' style={{ textAlign: 'center' }}>An Design ©2022 Created by Anpro3455</Footer>
    </Layout>
    </div>
  )
}
