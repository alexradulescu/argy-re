import React, { FC, forwardRef, Ref } from 'react'
import { Link as ReactRouterLink, NavLinkProps as RouterNavLinkProps } from 'react-router-dom'
import { ButtonProps, Button } from '@chakra-ui/core'

type LinkButtonProps = ButtonProps & RouterNavLinkProps

export const NavigationLink: FC<LinkButtonProps> = forwardRef(
  (props: LinkButtonProps, ref: Ref<any>) => <Button ref={ref} as={ReactRouterLink} {...props} />
)
