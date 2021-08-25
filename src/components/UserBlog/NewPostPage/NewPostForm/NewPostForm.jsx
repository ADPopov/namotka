import React from "react";
import {FormControl, Input} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {AddPost} from "../../../../redux/PostsReducer";

const NewPostForm = () => {
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={{
                postTitle: '',
                body: '',
            }}
            onSubmit={(values, actions) => {
                actions.setSubmitting(false);
                dispatch(AddPost(values.postTitle, values.body));
            }}
        >
            {props => {
                return (
                    <Form id={'createPostForm'}>
                        <Field name='postTitle'>
                            {({field, form}) => {
                                return (
                                    <FormControl>
                                        <Input variant="flushed"
                                               id='postTitle'
                                               name='postTitle'
                                               {...field}
                                               placeholder="Title of the post"
                                               fontWeight={"bold"}
                                               fontSize={40}
                                               h={20}
                                        />
                                    </FormControl>
                                )
                            }
                            }
                        </Field>
                        <Field name='body'>
                            {({field, form}) => {
                                return (
                                    <FormControl>
                                        <Input as={'textarea'} placeholder="Your post goes here..."
                                               fontSize={20}
                                               id='body'
                                               name='body'
                                               {...field}
                                               minH={'300px'}
                                               resize={"none"}
                                               border={'transparent'}
                                               focusBorderColor={'transparent'}
                                               p={0} mt={10}
                                        />
                                    </FormControl>
                                )}
                            }
                        </Field>

                    </Form>
                )
            }
            }
        </Formik>
    )
}

export default NewPostForm;
