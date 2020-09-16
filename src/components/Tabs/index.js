import React, { useState } from 'react';

import types from 'prop-types';
import className from 'classnames';

import './styles.scss';

export default function Tabs({ tabsLinks, tabsContent }) {
  const [activeTabName, setActiveTabName] = useState(tabsLinks[0].name);

  const tabsLinksClass = (name) =>
    className({
      'tabs__header-link': true,
      'tabs__header-link--active': name === activeTabName,
    });

  const handleTabSet = (name) => {
    setActiveTabName(name);
  };

  const tab = tabsContent.find((item) => item.name === activeTabName);

  return (
    <div className="tabs">
      <div className="tabs__header">
        {tabsLinks.map((link) => (
          <div
            className={tabsLinksClass(link.name)}
            onClick={() => handleTabSet(link.name)}
            key={link.name}
          >
            <div className="tabs__header-item">
              <p>{link.title}</p>
              <div>{link.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="tabs__content">
        <tab.content />
      </div>
    </div>
  );
}

Tabs.propTypes = {
  tabsLinks: types.arrayOf(types.object).isRequired,
  tabsContent: types.arrayOf(types.object).isRequired,
};
