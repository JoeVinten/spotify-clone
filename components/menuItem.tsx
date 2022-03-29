import {
  List,
  ListItem,
  LinkBox,
  LinkOverlay,
  ListIcon,
} from '@chakra-ui/layout'
import NextLink from 'next/link'

import React from 'react'
import { IconType } from 'react-icons'

interface MenuDataInterface {
  name: string
  icon: IconType
  route: string
}

interface MenuDataInterfaceProps {
  menuData: MenuDataInterface[]
}
const MenuItem: React.FC<MenuDataInterfaceProps> = ({
  menuData,
}: MenuDataInterfaceProps) => {
  return (
    <List spacing={2}>
      {menuData.map((menu) => (
        <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
          <LinkBox>
            <NextLink href={menu.route} passHref>
              <LinkOverlay>
                <ListIcon as={menu.icon} color="white" marginRight="20px" />
                {menu.name}
              </LinkOverlay>
            </NextLink>
          </LinkBox>
        </ListItem>
      ))}
    </List>
  )
}

export default MenuItem
