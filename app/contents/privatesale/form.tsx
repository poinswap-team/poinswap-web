import {
  Alert,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@vechaiui/react';
import { Form } from 'remix';

import { Button } from '~/components';
import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

interface PrivateSaleFormProps {
  className?: string;
  transition: any;
  actionData: any;
}

export const PrivateSaleForm: FunctionComponent<PrivateSaleFormProps> = ({
  className,
  transition,
  actionData,
}) => {
  const isLoading = transition.state === 'submitting';
  const buttonSubmitText = isLoading ? 'Subscribing...' : 'Subscribe';
  const placeholderText = {
    firstName: 'Geri Kuban',
    email: 'geri@slimetank.com',
  };
  const actionText = {
    success: 'Thank you for subscribing. Please check your inbox.',
    error: 'Sorry something went wrong. Please try again.',
  };

  return (
    <div className={classx('flex w-full', className)}>
      <div className="prose-config w-full max-w-xs">
        {/* Form inputs */}
        <Form method="post">
          <div className="space-y-4">
            <FormControl id="email">
              <FormLabel>Your name</FormLabel>
              <Input
                name="firstName"
                type="text"
                placeholder={placeholderText.firstName}
                size="lg"
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder={placeholderText.email}
                size="lg"
              />
              <FormHelperText>
                We'll never share your email, promise
              </FormHelperText>
            </FormControl>
          </div>

          <div className="space-y-4">
            <Button
              className="w-full"
              type="submit"
              variant="solid"
              color="primary"
              size="lg"
              loading={isLoading}
              loadingText={buttonSubmitText}
            >
              {buttonSubmitText}
            </Button>

            {actionData?.subscription && (
              <Alert variant="subtle" color="success">
                {actionData.message ?? actionText.success}
              </Alert>
            )}

            {actionData?.error && (
              <Alert variant="subtle" color="error">
                {actionData.message ?? actionText.error}
              </Alert>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};
