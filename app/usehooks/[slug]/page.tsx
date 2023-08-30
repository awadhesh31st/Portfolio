'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Line, LineContent, LineNo, Pre } from '@components/CodeHighLight';
import { Highlight, themes } from 'prism-react-renderer';
import { BlogMock } from '../../../mocks/blog-mock';
import { CodeSnippet } from '../../../mocks/code-snippet-mock';
import { BlogDetailProps } from '../../../types/common';

const HooksInfo = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [content, setContent] = useState<BlogDetailProps>({});
  const [languageDemo, changeDemo] = useState<string>('');

  useEffect(() => {
    changeDemo(CodeSnippet[params?.slug]);
    setContent(BlogMock[params?.slug]);
    setIsLoading(false);
  }, [params]);

  return (
    !isLoading && (
      <>
        <div className="flex flex-col items-center justify-start gap-5">
          <div className="py-10 mx-5 text-base sm:px-16 px-7 bg-charcoal text-biege mt-14 rounded-xl sm:w-[60rem]">
            <div className="flex flex-col gap-2 mb-10">
              <h3 className="text-4xl font-black text-orange">
                {content?.hookTitle}
              </h3>
              <p className="text-xl font-extraLight text-biege">
                {content?.hookDescription}
              </p>
            </div>
            <div className="flex flex-col gap-2 mb-7">
              <h3 className="text-lg font-bold uppercase text-biege">
                {content?.descriptionTitle}
              </h3>
              <p className="text-base font-extraLight text-biege ">
                {content?.description}
              </p>
            </div>
            {content?.returnDescription && (
              <div className="flex flex-col gap-2 mb-7">
                <h3 className="text-lg font-bold uppercase text-biege">
                  {content?.returnTitle}
                </h3>
                <p className="text-base font-extraLight text-biege ">
                  {content?.returnDescription}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="py-10 mx-5 text-base sm:px-16 px-7 bg-charcoal text-biege mt-14 rounded-xl">
          <div className="flex flex-col gap-2 mb-3">
            <h3 className="text-lg font-bold uppercase text-biege">Example</h3>
          </div>
          <div className="max-w-full p-5 overflow-x-auto text-sm bg-[rgba(0,0,0,.2)] rounded-xl">
            <Highlight theme={themes.vsDark} code={languageDemo} language="tsx">
              {({ tokens, getLineProps, getTokenProps }) => (
                <Pre>
                  {tokens.map((line, i) => (
                    <Line key={i} {...getLineProps({ line, key: i })}>
                      <LineNo>{i + 1}</LineNo>
                      <LineContent>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token, key })} />
                        ))}
                      </LineContent>
                    </Line>
                  ))}
                </Pre>
              )}
            </Highlight>
          </div>
        </div>
      </>
    )
  );
};

export default HooksInfo;
