import React from 'react'

import { ViewStates, useView } from '../state'
import { RevshareChart } from './revshare-chart'
import { ShareList } from './share-list'
import { ImportView } from './import'
import { SharesMetaTag } from './meta-tag'
import { SharesText } from './shares-text'
import { ImportText } from './import-text'
import { SectionHeader } from '../../shared/components/section-header'
import { OnlyClient } from './only-client'

export function ActiveView() {
  const [view] = useView()

  if (view === ViewStates.Shares) {
    return (
      <>
        <section>
          <SectionHeader>Editing Revshare</SectionHeader>
          <SharesText />
        </section>
        <OnlyClient>
          <RevshareChart />
          <ShareList />
          <section>
            <SectionHeader>Meta Tag</SectionHeader>
            <SharesMetaTag />
          </section>
        </OnlyClient>
      </>
    )
  } else if (view === ViewStates.Import) {
    return (
      <>
        <SectionHeader>Importing Revshare</SectionHeader>
        <ImportText />
        <ImportView />
      </>
    )
  } else {
    throw new Error('invalid view')
  }
}
