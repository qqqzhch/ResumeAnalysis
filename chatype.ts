
export interface ChatCompletionUserMessageParam {
    /**
     * The contents of the user message.
     */
    content: string ;
  
    /**
     * The role of the messages author, in this case `user`.
     */
    role: 'user';
  
    /**
     * An optional name for the participant. Provides the model information to
     * differentiate between participants of the same role.
     */
    name?: string;
  }
