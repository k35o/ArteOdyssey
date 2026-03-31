import type { Meta, StoryObj } from '@storybook/react';
import type { FC } from 'react';
import { cn } from '../helpers/cn';
import { Alert } from './feedback/alert';
import { Avatar } from './data-display/avatar';
import { Badge } from './data-display/badge';
import { Button } from './buttons/button';
import { Card } from './data-display/card';
import { FormControl } from './form/form-control';
import { Heading } from './data-display/heading';
import { Separator } from './layout/separator';
import { Tabs } from './navigation/tabs';
import { TextField } from './form/text-field';
import { Select } from './form/select';
import { Textarea } from './form/textarea';

/**
 * k8o-design の方針を実際のUI構成で確認するためのショーケース。
 * 「静謐で落ち着いた、余白を活かしたUI」が新しい OKLCH パレットで
 * どう見えるかを検証する。
 */

/* ─── 1. プロフィール設定 ─── */
const ProfileSettings: FC = () => {
  return (
    <div className="mx-auto flex max-w-160 flex-col py-10">
      <div>
        <Heading type="h2">プロフィール設定</Heading>
        <p className="mt-2 text-sm text-fg-mute">あなたの公開プロフィール情報を管理します</p>
      </div>

      <div className="py-10">
        <Separator />
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Avatar size="lg" name="佐藤 花子" />
          <div>
            <p className="text-sm font-medium text-fg-base">佐藤 花子</p>
            <p className="text-xs text-fg-mute">プロフィール画像を変更</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <FormControl
            label="表示名"
            isRequired
            renderInput={(props) => <TextField {...props} defaultValue="佐藤 花子" />}
          />
          <FormControl
            label="メールアドレス"
            isRequired
            renderInput={(props) => (
              <TextField
                {...props}
                defaultValue="hanako@example.com"
                placeholder="example@mail.com"
              />
            )}
          />
          <FormControl
            label="自己紹介"
            helpText="200文字以内で入力してください"
            renderInput={(props) => (
              <Textarea
                {...props}
                defaultValue="フロントエンドエンジニア。UIデザインとアクセシビリティに関心があります。"
              />
            )}
          />
        </div>
      </div>

      <div className="py-10">
        <Separator />
      </div>

      <div className="flex justify-end gap-3">
        <Button color="gray" variant="outlined">
          キャンセル
        </Button>
        <Button color="primary" variant="contained">
          保存する
        </Button>
      </div>
    </div>
  );
};

/* ─── 2. ダッシュボード ─── */
const Dashboard: FC = () => {
  const stats = [
    { label: '総ページビュー', value: '12,847', change: '+12.3%', tone: 'success' as const },
    { label: 'アクティブユーザー', value: '1,024', change: '+4.1%', tone: 'success' as const },
    { label: '平均セッション時間', value: '3m 42s', change: '-2.8%', tone: 'warning' as const },
    { label: 'エラー率', value: '0.12%', change: '+0.03%', tone: 'error' as const },
  ];

  return (
    <div className="mx-auto flex max-w-200 flex-col py-10">
      <div className="flex items-center justify-between">
        <div>
          <Heading type="h2">ダッシュボード</Heading>
          <p className="mt-2 text-sm text-fg-mute">2026年3月のサマリー</p>
        </div>
        <Button color="primary" variant="outlined" size="sm">
          レポートを出力
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} appearance="bordered">
            <div className="flex flex-col gap-3 p-6">
              <span className="text-sm text-fg-mute">{stat.label}</span>
              <span className="text-2xl font-bold text-fg-base">{stat.value}</span>
              <Badge text={stat.change} tone={stat.tone} size="sm" />
            </div>
          </Card>
        ))}
      </div>

      <div className="py-10">
        <Separator />
      </div>

      <Alert
        status="info"
        message="新しいレポート機能が追加されました。詳細はドキュメントをご確認ください。"
      />
    </div>
  );
};

/* ─── 3. 通知パネル ─── */
const NotificationPanel: FC = () => {
  const notifications = [
    { status: 'success' as const, message: 'デプロイが正常に完了しました (v2.4.1)' },
    { status: 'warning' as const, message: 'ストレージ使用量が 80% に達しています' },
    {
      status: 'error' as const,
      message: 'APIレートリミットを超過しました。しばらくお待ちください',
    },
    { status: 'info' as const, message: 'メンテナンスを 4月5日 02:00〜04:00 に予定しています' },
  ];

  return (
    <div className="mx-auto flex max-w-160 flex-col py-10">
      <div className="flex items-center justify-between">
        <Heading type="h2">通知</Heading>
        <div className="flex items-center gap-2">
          <Badge text="4件の未読" tone="info" variant="solid" />
          <Button variant="skeleton" size="sm">
            すべて既読にする
          </Button>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        {notifications.map((n, i) => (
          <Alert key={i} status={n.status} message={n.message} />
        ))}
      </div>

      <div className="py-10">
        <Separator />
      </div>

      <p className="text-center text-sm text-fg-subtle">過去の通知はアーカイブから確認できます</p>
    </div>
  );
};

/* ─── 4. コンテンツページ（タブ付き） ─── */
const ContentPage: FC = () => {
  const roleOptions = [
    { value: 'developer', label: '開発者' },
    { value: 'designer', label: 'デザイナー' },
    { value: 'manager', label: 'マネージャー' },
  ] as const;

  return (
    <div className="mx-auto flex max-w-160 flex-col gap-10 py-10">
      <div>
        <Badge text="新機能" tone="success" variant="solid" size="sm" />
        <Heading type="h2">
          <span className="mt-3 block">チーム管理</span>
        </Heading>
        <p className="mt-2 text-sm text-fg-mute">メンバーの追加・役割の管理ができます</p>
      </div>

      <Tabs.Root ids={['members', 'invite', 'settings']}>
        <Tabs.List label="チーム管理">
          <Tabs.Tab id="members">メンバー一覧</Tabs.Tab>
          <Tabs.Tab id="invite">招待</Tabs.Tab>
          <Tabs.Tab id="settings">設定</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel id="members">
          <div className="flex flex-col gap-6 pt-8">
            {[
              {
                name: '佐藤 花子',
                role: '開発者',
                status: 'success' as const,
                statusText: 'アクティブ',
              },
              {
                name: '田中 太郎',
                role: 'デザイナー',
                status: 'success' as const,
                statusText: 'アクティブ',
              },
              {
                name: '鈴木 一郎',
                role: 'マネージャー',
                status: 'warning' as const,
                statusText: '離席中',
              },
            ].map((member) => (
              <div key={member.name} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar size="md" name={member.name} />
                  <div>
                    <p className="text-sm font-medium text-fg-base">{member.name}</p>
                    <p className="text-xs text-fg-mute">{member.role}</p>
                  </div>
                </div>
                <Badge text={member.statusText} tone={member.status} size="sm" />
              </div>
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel id="invite">
          <div className="flex flex-col gap-6 pt-8">
            <FormControl
              label="メールアドレス"
              isRequired
              helpText="招待メールが送信されます"
              renderInput={(props) => <TextField {...props} placeholder="colleague@example.com" />}
            />
            <FormControl
              label="役割"
              isRequired
              renderInput={(props) => <Select {...props} options={roleOptions} defaultValue="" />}
            />
            <div>
              <Button color="primary" variant="contained">
                招待を送信
              </Button>
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel id="settings">
          <div className="flex flex-col gap-6 pt-8">
            <Alert status="info" message="チーム設定の変更はすべてのメンバーに影響します" />
            <FormControl
              label="チーム名"
              renderInput={(props) => <TextField {...props} defaultValue="ArteOdyssey" />}
            />
            <div className="flex justify-end gap-3">
              <Button color="gray" variant="outlined">
                リセット
              </Button>
              <Button color="primary" variant="contained">
                更新する
              </Button>
            </div>
          </div>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  );
};

/* ─── Meta ─── */
const meta = {
  title: 'Design Tokens/Design Showcase',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const プロフィール設定: Story = {
  render: () => <ProfileSettings />,
};

export const ダッシュボード: Story = {
  render: () => <Dashboard />,
};

export const 通知パネル: Story = {
  render: () => <NotificationPanel />,
};

export const チーム管理: Story = {
  render: () => <ContentPage />,
};

/* ─── 5. 現行デザイン（比較用） ─── */

const CurrentDesign: FC = () => {
  return (
    <div className="bg-bg-subtle px-8 py-10">
      <div className="mx-auto flex max-w-160 flex-col gap-10">
        <div>
          <Heading type="h2">プロフィール設定</Heading>
          <p className="mt-2 text-sm text-fg-mute">あなたの公開プロフィール情報を管理します</p>
        </div>

        <Card appearance="shadow">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <Avatar size="lg" name="佐藤 花子" />
              <div>
                <p className="text-sm font-bold text-fg-base">佐藤 花子</p>
                <p className="mt-1 text-xs text-fg-mute">プロフィール画像を変更</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-6">
              <FormControl
                label="表示名"
                isRequired
                renderInput={(props) => <TextField {...props} defaultValue="佐藤 花子" />}
              />
              <FormControl
                label="メールアドレス"
                isRequired
                renderInput={(props) => <TextField {...props} defaultValue="hanako@example.com" />}
              />
              <FormControl
                label="自己紹介"
                helpText="200文字以内で入力してください"
                renderInput={(props) => (
                  <Textarea
                    {...props}
                    defaultValue="フロントエンドエンジニア。UIデザインとアクセシビリティに関心があります。"
                  />
                )}
              />
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button color="gray" variant="outlined">
                キャンセル
              </Button>
              <Button color="primary" variant="contained">
                保存する
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-3 gap-4">
          {[
            { label: '総ページビュー', value: '12,847', badge: '+12.3%', tone: 'success' as const },
            {
              label: 'アクティブユーザー',
              value: '1,024',
              badge: '+4.1%',
              tone: 'success' as const,
            },
            { label: 'エラー率', value: '0.12%', badge: '+0.03%', tone: 'error' as const },
          ].map((stat) => (
            <Card key={stat.label} appearance="shadow">
              <div className="flex flex-col items-start gap-3 p-6">
                <span className="text-xs text-fg-mute">{stat.label}</span>
                <span className="text-2xl font-bold text-fg-base">{stat.value}</span>
                <Badge text={stat.badge} tone={stat.tone} size="sm" />
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <Alert status="success" message="デプロイが正常に完了しました (v2.4.1)" />
          <Alert status="warning" message="ストレージ使用量が 80% に達しています" />
          <Alert status="info" message="メンテナンスを 4月5日 02:00〜04:00 に予定しています" />
        </div>

        <Card appearance="shadow">
          <div className="p-6">
            <Tabs.Root ids={['members', 'invite']}>
              <Tabs.List label="チーム管理">
                <Tabs.Tab id="members">メンバー一覧</Tabs.Tab>
                <Tabs.Tab id="invite">招待</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel id="members">
                <div className="flex flex-col gap-6 pt-6">
                  {[
                    {
                      name: '佐藤 花子',
                      role: '開発者',
                      status: 'success' as const,
                      statusText: 'アクティブ',
                    },
                    {
                      name: '田中 太郎',
                      role: 'デザイナー',
                      status: 'success' as const,
                      statusText: 'アクティブ',
                    },
                    {
                      name: '鈴木 一郎',
                      role: 'マネージャー',
                      status: 'warning' as const,
                      statusText: '離席中',
                    },
                  ].map((member) => (
                    <div key={member.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar size="md" name={member.name} />
                        <div>
                          <p className="text-sm font-bold text-fg-base">{member.name}</p>
                          <p className="mt-1 text-xs text-fg-mute">{member.role}</p>
                        </div>
                      </div>
                      <Badge text={member.statusText} tone={member.status} size="sm" />
                    </div>
                  ))}
                </div>
              </Tabs.Panel>
              <Tabs.Panel id="invite">
                <div className="flex flex-col gap-6 pt-6">
                  <FormControl
                    label="メールアドレス"
                    isRequired
                    renderInput={(props) => (
                      <TextField {...props} placeholder="colleague@example.com" />
                    )}
                  />
                  <div>
                    <Button color="primary" variant="contained">
                      招待を送信
                    </Button>
                  </div>
                </div>
              </Tabs.Panel>
            </Tabs.Root>
          </div>
        </Card>
      </div>
    </div>
  );
};

export const 現行デザイン: Story = {
  render: () => <CurrentDesign />,
  parameters: {
    layout: 'fullscreen',
  },
};

/* ─── 6. 新方向性（ミックス） ─── */

/**
 * 言語化の結果を反映したミックスストーリー:
 * - フォーム: 柔らかい（大きな角丸、ピルボタン、ゆったりパディング）
 * - カード: 柔らかい（rounded-2xl、ふんわり影）
 * - Alert: 現行のまま
 * - Tabs: 現行のまま
 * - 背景: bg-subtle（カードが白で浮く）
 * - 余白: たっぷり
 *
 * CSSオーバーライドはフォーム要素とボタンのみに限定。
 */
const softFormStyles = `
  .soft-form button:not([role="tab"]) {
    border-radius: 9999px !important;
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
  }
  .soft-form input,
  .soft-form textarea {
    border-radius: 0.75rem !important;
    padding: 0.75rem 1.25rem !important;
  }
`;

const NewDirection: FC = () => {
  return (
    <>
      <style>{softFormStyles}</style>
      <div className="soft-form bg-bg-subtle min-h-screen px-12 py-16">
        <div className="mx-auto flex max-w-160 flex-col gap-10">
          <div>
            <Heading type="h2">プロフィール設定</Heading>
            <p className="mt-2 text-sm text-fg-mute">あなたの公開プロフィール情報を管理します</p>
          </div>

          {/* フォーム — 柔らかいカード + 柔らかいフォーム */}
          <Card appearance="shadow">
            <div className="p-8">
              <div className="flex items-center gap-5">
                <Avatar size="lg" name="佐藤 花子" />
                <div>
                  <p className="text-sm font-bold text-fg-base">佐藤 花子</p>
                  <p className="mt-1 text-xs text-fg-mute">プロフィール画像を変更</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-8">
                <FormControl
                  label="表示名"
                  isRequired
                  renderInput={(props) => <TextField {...props} defaultValue="佐藤 花子" />}
                />
                <FormControl
                  label="メールアドレス"
                  isRequired
                  renderInput={(props) => (
                    <TextField {...props} defaultValue="hanako@example.com" />
                  )}
                />
                <FormControl
                  label="自己紹介"
                  helpText="200文字以内で入力してください"
                  renderInput={(props) => (
                    <Textarea
                      {...props}
                      defaultValue="フロントエンドエンジニア。UIデザインとアクセシビリティに関心があります。"
                    />
                  )}
                />
              </div>

              <div className="mt-8 flex justify-end gap-4">
                <Button color="gray" variant="outlined">
                  キャンセル
                </Button>
                <Button color="primary" variant="contained">
                  保存する
                </Button>
              </div>
            </div>
          </Card>

          {/* 統計カード — 柔らかいカード */}
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                label: '総ページビュー',
                value: '12,847',
                badge: '+12.3%',
                tone: 'success' as const,
              },
              {
                label: 'アクティブユーザー',
                value: '1,024',
                badge: '+4.1%',
                tone: 'success' as const,
              },
              { label: 'エラー率', value: '0.12%', badge: '+0.03%', tone: 'error' as const },
            ].map((stat) => (
              <Card key={stat.label} appearance="shadow">
                <div className="flex flex-col items-start gap-3 p-8">
                  <span className="text-xs text-fg-mute">{stat.label}</span>
                  <span className="text-2xl font-bold text-fg-base">{stat.value}</span>
                  <Badge text={stat.badge} tone={stat.tone} size="sm" />
                </div>
              </Card>
            ))}
          </div>

          {/* Alert — 現行のまま */}
          <div className="flex flex-col gap-4">
            <Alert status="success" message="デプロイが正常に完了しました (v2.4.1)" />
            <Alert status="warning" message="ストレージ使用量が 80% に達しています" />
            <Alert status="info" message="メンテナンスを 4月5日 02:00〜04:00 に予定しています" />
          </div>

          {/* Tabs — 現行のまま、カード内 */}
          <Card appearance="shadow">
            <div className="p-8">
              <Tabs.Root ids={['members', 'invite']}>
                <Tabs.List label="チーム管理">
                  <Tabs.Tab id="members">メンバー一覧</Tabs.Tab>
                  <Tabs.Tab id="invite">招待</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel id="members">
                  <div className="flex flex-col gap-6 pt-8">
                    {[
                      {
                        name: '佐藤 花子',
                        role: '開発者',
                        status: 'success' as const,
                        statusText: 'アクティブ',
                      },
                      {
                        name: '田中 太郎',
                        role: 'デザイナー',
                        status: 'success' as const,
                        statusText: 'アクティブ',
                      },
                      {
                        name: '鈴木 一郎',
                        role: 'マネージャー',
                        status: 'warning' as const,
                        statusText: '離席中',
                      },
                    ].map((member) => (
                      <div key={member.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar size="md" name={member.name} />
                          <div>
                            <p className="text-sm font-bold text-fg-base">{member.name}</p>
                            <p className="mt-1 text-xs text-fg-mute">{member.role}</p>
                          </div>
                        </div>
                        <Badge text={member.statusText} tone={member.status} size="sm" />
                      </div>
                    ))}
                  </div>
                </Tabs.Panel>
                <Tabs.Panel id="invite">
                  <div className="flex flex-col gap-8 pt-8">
                    <FormControl
                      label="メールアドレス"
                      isRequired
                      renderInput={(props) => (
                        <TextField {...props} placeholder="colleague@example.com" />
                      )}
                    />
                    <div>
                      <Button color="primary" variant="contained">
                        招待を送信
                      </Button>
                    </div>
                  </div>
                </Tabs.Panel>
              </Tabs.Root>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export const 新方向性: Story = {
  render: () => <NewDirection />,
  parameters: {
    layout: 'fullscreen',
  },
};
