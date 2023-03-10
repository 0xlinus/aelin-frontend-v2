import type { NextPage } from 'next'
import Head from 'next/head'

import { LeftSidebarLayout } from '@/src/components/layout/LeftSidebarLayout'
import { List } from '@/src/components/notifications/List'
import { SectionIntro } from '@/src/components/section/SectionIntro'

const Notifications: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aelin - Notifications</title>
      </Head>
      <LeftSidebarLayout>
        <SectionIntro
          backgroundImage="/resources/svg/bg-notifications.svg"
          backgroundPosition="100% 120px"
          title="Notifications"
        >
          Investors will receive notifications about investment pool stages, required actions,
          vesting periods, and other important information. Check back often to stay up to date on
          your investments.
        </SectionIntro>
        <List />
      </LeftSidebarLayout>
    </>
  )
}

export default Notifications
