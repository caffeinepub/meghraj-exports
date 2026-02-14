import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface InquiryFormData {
  name: string;
  company: string;
  country: string;
  email: string;
  whatsapp: string;
  category: string;
  message: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InquiryFormData) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }

      await actor.submitInquiry(
        data.name,
        data.company,
        data.country,
        data.email,
        data.whatsapp,
        data.category,
        data.message
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}
