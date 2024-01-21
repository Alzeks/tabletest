import { accounts, profiles, compaigns } from "@/app/data";
import styles from '@/app/item/page.module.css'

export default function Item({ params: { id }, searchParams: { slug } }: any) {
    let name = ''
    let array: any = []
    switch (slug) {
        case slug = "account": name = 'Account'; array = accounts;
            break;
        case slug = "profile": name = 'Profile'; array = profiles;
            break;
        case slug = "compaign": name = 'Compaign'; array = compaigns;
            break
    }
    const newArray = array.filter((item: any) => item.id == id)[0]

    return (
        <div className={styles.container}>
            <h2>{name}</h2><div>{newArray.id}</div>

            {name === 'Account' && <div>
                <div className={styles.item}>
                    <div>Id:</div>
                    <div> {newArray.id}</div>
                </div>
                <div className={styles.item}>
                    <div>Email:</div>
                    <div> {newArray.email}</div>
                </div>
                <div className={styles.item}>
                    <div>AuthToken:</div>
                    <div> {newArray.authToken}</div>
                </div>
                <div className={styles.item}>
                    <div>CreationDate:</div>
                    <div> {newArray.creationDate}</div>
                </div>
            </div>
            }
            {/* ----------------------------- */}
            {name === 'Profile' && <div>
                <div className={styles.item}>
                    <div>Id:</div>
                    <div> {newArray.id}</div>
                </div>
                <div className={styles.item}>
                    <div>Country:</div>
                    <div> {newArray.country}</div>
                </div>
                <div className={styles.item}>
                    <div>Marketplace:</div>
                    <div> {newArray.marketplace}</div>
                </div>
            </div>
            }
            {/* ------------------------------ */}
            {name === 'Compaign' && <div>
                <div className={styles.item}>
                    <div>Id:</div>
                    <div> {newArray.id}</div>
                </div>
                <div className={styles.item}>
                    <div>Clicks:</div>
                    <div> {newArray.clicks}</div>
                </div>
                <div className={styles.item}>
                    <div>Cost:</div>
                    <div> {newArray.cost}</div>
                </div>
                <div className={styles.item}>
                    <div>Date:</div>
                    <div> {newArray.date}</div>
                </div>
            </div>
            }
        </div>
    );
}